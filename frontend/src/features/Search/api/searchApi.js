import api from "@/api/axios";

export async function semanticSearch(query) {

    const response = await api.get("/search", {

        params: {

            query

        }

    });

    return response.data;

}