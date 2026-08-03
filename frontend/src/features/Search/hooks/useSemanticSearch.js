import { useQuery } from "@tanstack/react-query";

import { semanticSearch } from "../api/searchApi";

export default function useSemanticSearch(query) {

    return useQuery({

        queryKey: [

            "semantic-search",

            query

        ],

        queryFn: () => semanticSearch(query),

        enabled: query.trim().length > 0,

        staleTime: 1000 * 60

    });

}