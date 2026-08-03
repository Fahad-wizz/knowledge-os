import { useEffect, useRef } from "react";

import ChatMessage from "./ChatMessage";

import TypingIndicator from "./TypingIndicator";

export default function ChatMessages({

    messages,

    loading

}) {

    const bottomRef = useRef(null);

    useEffect(() => {

        bottomRef.current?.scrollIntoView({

            behavior: "smooth"

        });

    }, [messages, loading]);

    return (

        <div className="flex h-full flex-col overflow-y-auto p-8">

            <div className="space-y-6">

                {

                    messages.map(message => (

                        <ChatMessage

                            key={message.id}

                            message={message}

                        />

                    ))

                }

                {

                    loading &&

                    <TypingIndicator />

                }

                <div ref={bottomRef} />

            </div>

        </div>

    );

}