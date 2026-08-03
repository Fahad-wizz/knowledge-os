import { useQuery } from "@tanstack/react-query";
import { getSource } from "../api/sourceApi";

export default function useSource() {

    return useQuery({

        queryKey: ["documents"],

        queryFn: getSource

    });

}