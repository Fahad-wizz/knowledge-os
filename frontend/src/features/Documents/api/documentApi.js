import api from "@/api/axios";

const documentApi = {

    upload(formData) {

        return api.post(
            "/documents/upload",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        );

    },

    getAll() {

        return api.get("/documents");

    },

    delete(id) {

        return api.delete(
            `/documents/${id}`
        );

    }

};

export default documentApi;