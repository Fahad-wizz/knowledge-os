import { useState } from "react";

import { Copy, Check } from "lucide-react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Button } from "@/components/ui/button";

export default function CodeBlock({

    language,

    value

}) {

    const [copied, setCopied] = useState(false);

    async function copy() {

        await navigator.clipboard.writeText(value);

        setCopied(true);

        setTimeout(() =>

            setCopied(false),

            2000

        );

    }

    return (

        <div className="my-5 overflow-hidden rounded-xl border border-slate-700">

            <div className="flex items-center justify-between border-b border-slate-700 bg-slate-900 px-4 py-2">

                <span className="text-sm font-medium text-slate-300">

                    {language || "text"}

                </span>

                <Button

                    variant="ghost"

                    size="sm"

                    onClick={copy}

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

            <SyntaxHighlighter

                language={language}

                style={oneDark}

                customStyle={{

                    margin: 0,

                    borderRadius: 0,

                    background: "#020617",

                    fontSize: "14px"

                }}

            >

                {value}

            </SyntaxHighlighter>

        </div>

    );

}