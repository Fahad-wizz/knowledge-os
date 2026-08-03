import { FileText } from "lucide-react";

export default function SearchResultCard({

    result,

    selected,

    onClick

}) {

    const similarity = Math.round(result.score * 100);

    const snippet =

        result.snippet.length > 180

            ? result.snippet.slice(0, 180) + "..."

            : result.snippet;

    return (

        <div

            onClick={onClick}

            className={`
                cursor-pointer
                rounded-xl
                border
                p-4
                transition
                ${
                    selected

                        ? "border-blue-500 bg-slate-800"

                        : "border-slate-800 bg-slate-900 hover:bg-slate-800"
                }
            `}

        >

            <div className="flex items-center justify-between">

                <div className="flex items-center gap-2">

                    <FileText size={18} />

                    <h3 className="font-semibold">

                        {result.documentName}

                    </h3>

                </div>

                <span className="text-xs text-blue-400">

                    {similarity}% Match

                </span>

            </div>

            <p className="mt-2 text-xs text-slate-400">

                Chunk #{result.chunkIndex}

            </p>

            <p className="mt-3 text-sm text-slate-300">

                {snippet}

            </p>

        </div>

    );

}