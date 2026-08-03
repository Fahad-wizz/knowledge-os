import { Brain } from "lucide-react";
import { highlightText } from "../utils/highlightText";

export default function KnowledgePreview({

    result,

    query,

}) {

    if (!result) {

        return (

            <div className="flex h-full min-h-[500px] flex-col items-center justify-center rounded-xl border border-dashed border-slate-700">

                <Brain
                    size={50}
                    className="mb-4 text-slate-500"
                />

                <h2 className="text-xl font-semibold">

                    Select a Result

                </h2>

                <p className="mt-2 text-slate-400">

                    The matching knowledge will appear here.

                </p>

            </div>

        );

    }

    const parts = highlightText(result.snippet, query);

    const similarity = Math.round(result.score * 100);

    return (

        <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">

            <div className="flex items-center justify-between">

                <h2 className="text-2xl font-bold">

                    {result.documentName}

                </h2>

                <span className="rounded-md bg-blue-600 px-3 py-1 text-xs">

                    {similarity}% Match

                </span>

            </div>

            <div className="mt-3 flex gap-2">

                <span className="rounded bg-slate-800 px-2 py-1 text-xs">

                    Chunk {result.chunkIndex}

                </span>

            </div>

            <div className="mt-6 rounded-xl bg-slate-950 p-6">

                <p className="leading-8 whitespace-pre-wrap text-slate-300">

                    {

                        parts.map((part, index) =>

                            part.toLowerCase() === query.toLowerCase()

                                ? (

                                    <mark

                                        key={index}

                                        className="rounded bg-yellow-400 px-1 text-black"

                                    >

                                        {part}

                                    </mark>

                                )

                                : (

                                    <span key={index}>

                                        {part}

                                    </span>

                                )

                        )

                    }

                </p>

            </div>

            <div className="mt-8 flex gap-3">

                <button

                    className="
                        rounded-lg
                        bg-blue-600
                        px-4
                        py-2
                        font-medium
                        transition
                        hover:bg-blue-700
                    "

                >

                    Ask AI

                </button>

                <button

                    className="
                        rounded-lg
                        border
                        border-slate-700
                        px-4
                        py-2
                        hover:bg-slate-800
                    "

                >

                    Open Source

                </button>

            </div>

        </div>

    );

}