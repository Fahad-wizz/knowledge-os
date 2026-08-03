import api from "@/api/axios";

export async function getSources() {

    const response = await api.get("/knowledge-sources");

    return response.data;

}

export async function getSource(id) {

    const response = await api.get(`/knowledge-sources/${id}`);

    return response.data;

}

export async function createSource(data) {

    const response = await api.post(
        "/knowledge-sources",
        data
    );

    return response.data;

}

export async function deleteSource(id) {

    await api.delete(`/knowledge-sources/${id}`);

}

export async function indexSource(id) {

    const response = await api.post(
        `/knowledge-sources/${id}/index`
    );

    return response.data;

}