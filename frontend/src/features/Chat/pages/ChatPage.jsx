import DashboardLayout from "@/layouts/DashboardLayout";

import ChatHeader from "../components/ChatHeader";
import EmptyChat from "../components/EmptyChat";
import ChatMessages from "../components/ChatMessages";
import ChatInput from "../components/ChatInput";

import useChat from "../hooks/useChat";

export default function ChatPage() {

    const {

        messages,

        loading,

        ask

    } = useChat();

    return (

        <DashboardLayout>

            <div className="mx-auto flex h-[calc(100vh-120px)] max-w-7xl flex-col">

                <ChatHeader />

                <div className="mt-6 flex-1 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">

                    {

                        messages.length === 0

                            ?

                            <EmptyChat onQuestionClick={ask} />

                            :

                            <ChatMessages

                                messages={messages}

                                loading={loading}

                            />

                    }

                </div>

                <ChatInput

                    loading={loading}

                    onSend={ask}

                />

            </div>

        </DashboardLayout>

    );

}