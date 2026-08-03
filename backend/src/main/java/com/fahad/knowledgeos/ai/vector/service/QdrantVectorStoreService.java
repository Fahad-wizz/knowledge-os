package com.fahad.knowledgeos.ai.vector.service;

import java.util.*;

import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestClient;

import com.fahad.knowledgeos.ai.search.config.SearchProperties;
import com.fahad.knowledgeos.ai.vector.config.QdrantProperties;
import com.fahad.knowledgeos.ai.vector.dto.CreateCollectionRequest;
import com.fahad.knowledgeos.ai.vector.dto.DeletePointsRequest;
import com.fahad.knowledgeos.ai.vector.dto.Distance;
import com.fahad.knowledgeos.ai.vector.dto.PointStruct;
import com.fahad.knowledgeos.ai.vector.dto.QueryResponse;
import com.fahad.knowledgeos.ai.vector.dto.ScoredPoint;
import com.fahad.knowledgeos.ai.vector.dto.SearchPointsRequest;
import com.fahad.knowledgeos.ai.vector.dto.UpsertRequest;
import com.fahad.knowledgeos.ai.vector.dto.VectorParams;
import com.fahad.knowledgeos.ai.vector.dto.VectorPayload;
import com.fahad.knowledgeos.document.entity.DocumentChunk;
import com.fahad.knowledgeos.ai.vector.dto.Condition;
import com.fahad.knowledgeos.ai.vector.dto.Filter;
import com.fahad.knowledgeos.ai.vector.dto.Match;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class QdrantVectorStoreService implements VectorStoreService {

    private final RestClient restClient;
    private final QdrantProperties properties;
    private final SearchProperties searchProperties;

   @Override
   public void initializeCollection() {

        try {

                CreateCollectionRequest request =
                        new CreateCollectionRequest(
                                new VectorParams(
                                        768,
                                        Distance.Cosine
                                )
                        );

                restClient.put()
                        .uri("/collections/{name}", properties.getCollection())
                        .body(request)
                        .retrieve()
                        .toBodilessEntity();

                System.out.println("✅ Collection created.");

        } catch (HttpClientErrorException.Conflict ex) {

                        System.out.println("✅ Collection already exists.");

                }

        }

    @Override
    public void store(
            DocumentChunk chunk,
            float[] embedding
            
    ) {

        System.out.println("==================================");
        System.out.println("Storing chunk: " + chunk.getId());
        System.out.println("Embedding size: " + embedding.length);

        VectorPayload payload =
        VectorPayload.builder()
                .ownerId(
                        chunk.getDocumentContent()
                                .getDocument()
                                .getOwner()
                                .getId())
                .documentId(
                        chunk.getDocumentContent()
                             .getDocument()
                             .getId())
                .documentContentId(
                        chunk.getDocumentContent().getId())
                .documentName(
                        chunk.getDocumentContent()
                             .getDocument()
                             .getOriginalFileName())
                .chunkId(chunk.getId())
                .chunkIndex(chunk.getChunkIndex())
                .contentType(
                        chunk.getDocumentContent()
                             .getDocument()
                             .getContentType())
                .text(chunk.getChunkText())
                .build();

        PointStruct point =
        new PointStruct(
                chunk.getId(),
                embedding,
                payload
        );

        UpsertRequest request = new UpsertRequest(List.of(point));

        try {

                String response = restClient.put()
                        .uri("/collections/{name}/points", properties.getCollection())
                        .body(request)
                        .retrieve()
                        .body(String.class);

                System.out.println("Qdrant Response: " + response);

        } catch (Exception ex) {

                ex.printStackTrace();

        }
       }

       @Override
                public List<ScoredPoint> search(
                        float[] embedding,
                        int limit, long ownerId) {

                Filter filter =
                        new Filter(
                                List.of(
                                        new Condition(
                                                "ownerId",
                                                new Match(ownerId)
                                        )
                                )
                        );

                SearchPointsRequest request =
                        SearchPointsRequest.builder()
                                .query(embedding)
                                .limit(limit)
                                .filter(filter)
                                .scoreThreshold(searchProperties.getScoreThreshold())
                                .build();

                QueryResponse response =
                        restClient.post()
                                .uri("/collections/{name}/points/query",
                                        properties.getCollection())
                                .body(request)
                                .retrieve()
                                .body(QueryResponse.class);
                System.out.println("Returned points: " + response.getResult().getPoints().size());

                return response.getResult().getPoints();

        }
        
        @Override
        public void delete(List<Long> pointIds) {

        if (pointIds.isEmpty()) {
                return;
        }

        DeletePointsRequest request =
                new DeletePointsRequest(pointIds);

        try {

                String response =
                        restClient.post()
                                .uri(
                                        "/collections/{name}/points/delete",
                                        properties.getCollection())
                                .body(request)
                                .retrieve()
                                .body(String.class);

                System.out.println(
                        "Qdrant delete response: "
                                + response);

        }

        catch (Exception ex) {

                throw new RuntimeException(
                        "Failed to delete vectors.",
                        ex);

        }

        }
        
}