import api from "@/api/axios";

export async function getSource() {
    const response = await api.get("/documents");
    return response.data;
}

export async function uploadSource(file) {

    const formData = new FormData();

    formData.append("file", file);

    const response = await api.post(
        "/documents/upload",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data;
}

export async function deleteSource(id) {
    await api.delete(`/documents/${id}`);
}