import { useRef, useState } from "react";

import { SendHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ChatInput({

    loading,

    onSend

}) {

    const [message, setMessage] = useState("");

    const textareaRef = useRef(null);

    function handleChange(e) {

        setMessage(e.target.value);

        const textarea = textareaRef.current;

        textarea.style.height = "auto";

        textarea.style.height =

            `${textarea.scrollHeight}px`;

    }

    function handleSubmit() {

        const text = message.trim();

        if (!text || loading) {

            return;

        }

        onSend(text);

        setMessage("");

        textareaRef.current.style.height = "56px";

    }

    function handleKeyDown(e) {

        if (

            e.key === "Enter"

            &&

            !e.shiftKey

        ) {

            e.preventDefault();

            handleSubmit();

        }

    }

    return (

        <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-900 p-4">

            <div className="flex items-end gap-3">

                <textarea

                    ref={textareaRef}

                    rows={1}

                    value={message}

                    disabled={loading}

                    onChange={handleChange}

                    onKeyDown={handleKeyDown}

                    placeholder="Ask anything about your knowledge..."

                    className="max-h-56 min-h-[56px] flex-1 resize-none overflow-y-auto rounded-xl border border-slate-700 bg-slate-950 px-4 py-4 text-sm outline-none transition focus:border-blue-500"

                />

                <Button

                    disabled={loading || !message.trim()}

                    onClick={handleSubmit}

                    className="h-14 w-14 rounded-xl"

                >

                    <SendHorizontal className="h-5 w-5" />

                </Button>

            </div>

        </div>

    );

}