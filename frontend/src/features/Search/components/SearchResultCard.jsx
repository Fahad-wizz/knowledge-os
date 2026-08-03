import {
    FileText,
    ChevronRight,
    Hash
} from "lucide-react";

import {
    Card,
    CardContent
} from "@/components/ui/card";

import SimilarityBadge from "@/features/Search/components/SimilarityBadge";

export default function SearchResultCard({

    result,

    selected,

    onClick

}) {

    const similarity =
        Math.round(result.score * 100);

    return (

        <Card

            onClick={onClick}

            className={`

                cursor-pointer

                transition-all

                duration-200

                hover:border-blue-500

                hover:shadow-md

                ${selected
                    ? "border-blue-500 bg-slate-900"
                    : ""
                }

            `}

        >

            <CardContent className="space-y-4 p-5">

                <div className="flex items-start justify-between">

                    <div className="flex gap-3">

                        <FileText

                            className="mt-1 h-5 w-5 text-blue-500"

                        />

                        <div>

                            <h3 className="font-semibold">

                                {result.documentName}

                            </h3>

                            <p className="mt-1 text-xs text-slate-400">

                                Document ID #{result.documentId}

                            </p>

                        </div>

                    </div>

                    <SimilarityBadge score={result.score} />

                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400">

                    <Hash className="h-4 w-4" />

                    Chunk {result.chunkIndex}

                </div>

                <p className="line-clamp-4 text-sm leading-7 text-slate-300">

                    {result.snippet}

                </p>

                <div className="flex items-center justify-end">

                    <ChevronRight

                        className="h-5 w-5 text-slate-500"

                    />

                </div>

            </CardContent>

        </Card>

    );

}