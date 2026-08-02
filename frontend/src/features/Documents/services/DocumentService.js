import api from "@/api/axios";

const documentService = {

    async upload(file) {

        const formData = new FormData();

        formData.append("file", file);

        const response = await api.post(
            "/documents/upload",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        );

        return response.data;
    },

    async getAll() {

        const response =
            await api.get("/documents");

        return response.data;
    },

    async delete(id) {

        await api.delete(`/documents/${id}`);

    }

};

export default documentService;