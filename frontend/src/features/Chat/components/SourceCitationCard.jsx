import {

    FileText,

    Hash,

    Percent

} from "lucide-react";

import {

    Card,

    CardContent

} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

export default function SourceCard({

    source

}) {

    const similarity =

        Math.round(source.score * 100);

    let badgeClass =

        "bg-red-500";

    if (similarity >= 90) {

        badgeClass = "bg-green-600";

    }

    else if (similarity >= 75) {

        badgeClass = "bg-blue-600";

    }

    else if (similarity >= 60) {

        badgeClass = "bg-yellow-500 text-black";

    }

    return (

        <Card className="border-slate-800 bg-slate-950">

            <CardContent className="space-y-4 p-4">

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">

                        <FileText className="h-5 w-5 text-blue-500"/>

                        <p className="font-medium">

                            {source.documentName}

                        </p>

                    </div>

                    <Badge className={badgeClass}>

                        {similarity}%

                    </Badge>

                </div>

                <div className="flex items-center gap-6 text-sm text-slate-400">

                    <div className="flex items-center gap-2">

                        <Hash className="h-4 w-4"/>

                        Chunk {source.chunkIndex}

                    </div>

                    <div className="flex items-center gap-2">

                        <Percent className="h-4 w-4"/>

                        {(source.score).toFixed(2)}

                    </div>

                </div>

                <div className="rounded-lg bg-slate-900 p-3">

                    <p className="line-clamp-4 text-sm text-slate-300">

                        {source.snippet}

                    </p>

                </div>

            </CardContent>

        </Card>

    );

}