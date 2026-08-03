import {
    FileText,
    Hash,
    Percent,
    Copy,
    Sparkles
} from "lucide-react";

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { toast } from "sonner";

export default function KnowledgePreview({

    result

}) {

    if (!result) {

        return (

            <Card className="h-[650px]">

                <CardContent className="flex h-full items-center justify-center">

                    <div className="text-center">

                        <FileText
                            className="mx-auto mb-4 h-12 w-12 text-slate-500"
                        />

                        <h2 className="text-xl font-semibold">

                            Knowledge Preview

                        </h2>

                        <p className="mt-2 text-slate-400">

                            Select a search result to preview it.

                        </p>

                    </div>

                </CardContent>

            </Card>

        );

    }

    function copySnippet() {

        navigator.clipboard.writeText(result.snippet);

        toast.success("Snippet copied.");

    }

    return (

        <Card className="sticky top-24 h-[650px]">

            <CardHeader>

                <CardTitle className="flex items-center gap-2">

                    <FileText className="h-5 w-5 text-blue-500" />

                    {result.documentName}

                </CardTitle>

            </CardHeader>

            <CardContent className="flex h-full flex-col">

                {/* Metadata */}

                <div className="grid grid-cols-2 gap-4 rounded-lg border border-slate-800 bg-slate-900 p-4">

                    <div>

                        <p className="text-xs text-slate-400">

                            Similarity

                        </p>

                        <div className="mt-1 flex items-center gap-2">

                            <Percent className="h-4 w-4 text-blue-500" />

                            <span className="font-semibold">

                                {Math.round(result.score * 100)}%

                            </span>

                        </div>

                    </div>

                    <div>

                        <p className="text-xs text-slate-400">

                            Chunk

                        </p>

                        <div className="mt-1 flex items-center gap-2">

                            <Hash className="h-4 w-4 text-blue-500" />

                            <span className="font-semibold">

                                {result.chunkIndex}

                            </span>

                        </div>

                    </div>

                </div>

                {/* Preview */}

                <div className="mt-6 flex-1 overflow-y-auto rounded-lg border border-slate-800 bg-slate-900 p-5">

                    <p className="whitespace-pre-wrap leading-8 text-slate-300">

                        {result.snippet}

                    </p>

                </div>

                {/* Actions */}

                <div className="mt-6 flex gap-3">

                    <Button

                        variant="outline"

                        className="flex-1"

                        onClick={copySnippet}

                    >

                        <Copy className="mr-2 h-4 w-4" />

                        Copy

                    </Button>

                    <Button

                        className="flex-1"

                    >

                        <Sparkles className="mr-2 h-4 w-4" />

                        Ask AI

                    </Button>

                </div>

            </CardContent>

        </Card>

    );

}