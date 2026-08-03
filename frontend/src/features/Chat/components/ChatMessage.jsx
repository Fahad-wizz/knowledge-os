import { Bot, User, Copy, Check } from "lucide-react";

import { useState } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Button } from "@/components/ui/button";

import SourceCitationCard from "./SourceCitationCard";

export default function ChatMessage({

    message

}) {

    const isAssistant =

        message.role === "assistant";

    const [copied, setCopied] = useState(false);

    async function copyMessage() {

        await navigator.clipboard.writeText(

            message.content

        );

        setCopied(true);

        setTimeout(() =>

            setCopied(false),

            2000

        );

    }

    return (

        <div

            className={`

                flex

                gap-4

                ${

                    isAssistant

                        ?

                        "justify-start"

                        :

                        "justify-end"

                }

            `}

        >

            {

                isAssistant &&

                <div

                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600"

                >

                    <Bot className="h-5 w-5 text-white"/>

                </div>

            }

            <div

                className={`

                    max-w-4xl

                    rounded-2xl

                    border

                    p-5

                    shadow-sm

                    ${

                        isAssistant

                        ?

                        "border-slate-800 bg-slate-900"

                        :

                        "border-blue-600 bg-blue-600 text-white"

                    }

                `}

            >

                <div className="prose prose-invert max-w-none">

                    <ReactMarkdown

                        remarkPlugins={[remarkGfm]}

                        components={{

                            code({

                                inline,

                                className,

                                children,

                                ...props

                            }) {

                                const match =

                                    /language-(\w+)/.exec(

                                        className || ""

                                    );

                                return !

                                    inline && match

                                        ?

                                        (

                                            <SyntaxHighlighter

                                                style={oneDark}

                                                language={match[1]}

                                                PreTag="div"

                                                {...props}

                                            >

                                                {

                                                    String(children)

                                                        .replace(/\n$/, "")

                                                }

                                            </SyntaxHighlighter>

                                        )

                                        :

                                        (

                                            <code

                                                className="rounded bg-slate-800 px-1 py-0.5"

                                                {...props}

                                            >

                                                {children}

                                            </code>

                                        );

                            }

                        }}

                    >

                        {message.content}

                    </ReactMarkdown>

                </div>

                {

                    isAssistant

                    &&

                    message.sources?.length > 0

                    &&

                    <div className="mt-6 space-y-3">

                        {

                            message.sources.map(source => (

                                <SourceCitationCard

                                    key={source.chunkId}

                                    source={source}

                                />

                            ))

                        }

                    </div>

                }

                {

                    isAssistant

                    &&

                    <div className="mt-5 flex justify-end">

                        <Button

                            variant="ghost"

                            size="icon"

                            onClick={copyMessage}

                        >

                            {

                                copied

                                ?

                                <Check className="h-4 w-4"/>

                                :

                                <Copy className="h-4 w-4"/>

                            }

                        </Button>

                    </div>

                }

            </div>

            {

                !isAssistant &&

                <div

                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-700"

                >

                    <User className="h-5 w-5"/>

                </div>

            }

        </div>

    );

}