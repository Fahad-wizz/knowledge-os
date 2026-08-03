import { Folder } from "lucide-react";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import SourceStatusBadge
    from "@/features/sources/components/SourceStatusBadge";

import { useNavigate } from "react-router-dom";

export default function RecentSources({

    sources

}) {

    const navigate = useNavigate();

    return (

        <Card>

            <CardHeader>

                <CardTitle>

                    Recent Sources

                </CardTitle>

            </CardHeader>

            <CardContent>

                {

                    sources.length === 0 ? (

                        <p className="text-slate-400">

                            No knowledge sources yet.

                        </p>

                    ) : (

                        <div className="space-y-3">

                            {

                                sources.map(source => (

                                    <div

                                        key={source.id}

                                        onClick={() =>
                                            navigate("/sources")
                                        }

                                        className="flex cursor-pointer items-center justify-between rounded-lg border p-4 transition hover:border-blue-500"

                                    >

                                        <div className="flex items-center gap-3">

                                            <Folder className="h-5 w-5 text-blue-500" />

                                            <div>

                                                <p className="font-medium">

                                                    {source.displayName}

                                                </p>

                                                <p className="text-xs text-slate-400">

                                                    {source.rootPath}

                                                </p>

                                            </div>

                                        </div>

                                        <SourceStatusBadge
                                            status={source.status}
                                        />

                                    </div>

                                ))

                            }

                        </div>

                    )

                }

            </CardContent>

        </Card>

    );

}