import { Bot } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ChatHeader() {

    return (

        <div className="flex items-center justify-between">

            <div>

                <div className="flex items-center gap-3">

                    <Bot className="h-8 w-8 text-blue-500" />

                    <h1 className="text-4xl font-bold">

                        KnowledgeOS AI

                    </h1>

                </div>

                <p className="mt-2 text-slate-400">

                    Ask questions about your indexed knowledge.

                </p>

            </div>

            <Button>

                New Chat

            </Button>

        </div>

    );

}