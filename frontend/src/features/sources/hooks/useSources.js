import { useQuery } from "@tanstack/react-query";

import { getSources } from "../api/sourceApi";

export default function useSources() {

    return useQuery({

        queryKey: ["sources"],

        queryFn: getSources

    });

}