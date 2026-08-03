import { useState } from "react";

import { sendMessage } from "../api/chatApi";

export default function useChat() {

    const [messages, setMessages] = useState([]);

    const [loading, setLoading] = useState(false);

    async function ask(question) {

        if (!question.trim()) {

            return;

        }

        const userMessage = {

            id: Date.now(),

            role: "user",

            content: question

        };

        setMessages(previous => [

            ...previous,

            userMessage

        ]);

        setLoading(true);

        try {

            const response = await sendMessage(question);

            const assistantMessage = {

                id: Date.now() + 1,

                role: "assistant",

                content: response.answer,

                sources: response.sources,

                confidence: response.confidence

            };

            setMessages(previous => [

                ...previous,

                assistantMessage

            ]);

        } catch {

            setMessages(previous => [

                ...previous,

                {

                    id: Date.now() + 2,

                    role: "assistant",

                    content:

                        "Something went wrong while generating the response.",

                    sources: []

                }

            ]);

        } finally {

            setLoading(false);

        }

    }

    return {

        messages,

        loading,

        ask

    };

}