import api from "@/api/axios";

export async function searchKnowledge(query, limit = 10) {

    const response = await api.get("/search", {

        params: {
            query,
            limit
        }

    });

    return response.data;

}