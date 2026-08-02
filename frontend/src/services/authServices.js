import api from "@/api/axios";

const authService = {

    async login(credentials) {

        const response =
            await api.post(
                "/auth/login",
                credentials
            );

        return response.data;

    },

    async register(user) {

        const response =
            await api.post(
                "/auth/register",
                user
            );

        return response.data;

    }

};

export default authService;