import { useQuery } from "@tanstack/react-query";

import { searchKnowledge } from "../api/searchApi";

export default function useSemanticSearch(query) {

    return useQuery({

        queryKey: ["search", query],

        queryFn: () => searchKnowledge(query),

        enabled: query.trim().length > 0

    });

}