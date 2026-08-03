import api from "@/api/axios";

export async function sendMessage(message) {

    const response = await api.post(

        "/chat",

        {

            message

        }

    );

    return response.data;

}