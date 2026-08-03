import { Folder } from "lucide-react";

import {
    Card,
    CardContent
} from "@/components/ui/card";

import SourceStatusBadge from "./SourceStatusBadge";

export default function SourceCard({

    source,

    selected,

    onClick

}) {

    return (

        <Card

            onClick={onClick}

            className={`

                cursor-pointer

                transition-all

                hover:border-blue-500

                ${selected
                    ? "border-blue-500 bg-slate-900"
                    : ""
                }

            `}

        >

            <CardContent className="flex items-center justify-between p-4">

                <div className="flex items-center gap-3">

                    <Folder className="h-5 w-5 text-blue-500" />

                    <div>

                        <p className="font-semibold">

                            {source.displayName}

                        </p>

                        <p className="text-xs text-slate-400 truncate">

                            {source.rootPath}

                        </p>

                    </div>

                </div>

                <SourceStatusBadge status={source.status} />

            </CardContent>

        </Card>

    );

}