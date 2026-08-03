import { FileText } from "lucide-react";
import { getConfidence } from "../utils/searchUtils";

export default function SearchResultCard({

    result,

    selected,

    onClick,

}) {

    const similarity = Math.round(result.score * 100);

    const confidence = getConfidence(result.score);

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
                transition-all
                duration-200
                hover:border-blue-500
                hover:shadow-lg

                ${
                    selected
                        ? "border-blue-500 bg-slate-800"
                        : "border-slate-700 bg-slate-900"
                }
            `}

        >

            <div className="flex justify-between items-start">

                <div className="flex gap-3">

                    <FileText

                        size={20}

                        className="mt-1 text-blue-400"

                    />

                    <div>

                        <h3 className="font-semibold">

                            {result.documentName}

                        </h3>

                        <div className="mt-2 flex gap-2">

                            <span className="rounded-md bg-slate-800 px-2 py-1 text-xs">

                                Chunk {result.chunkIndex}

                            </span>

                        </div>

                    </div>

                </div>

                <div className="text-right">

                    <p className={`text-xs ${confidence.color}`}>

                        {confidence.label}

                    </p>

                    <p className="text-xs text-slate-500">

                        {similarity}%

                    </p>

                </div>

            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">

                {snippet}

            </p>

        </div>

    );

}