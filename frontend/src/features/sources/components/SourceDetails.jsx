import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import SourceStatusBadge from "./SourceStatusBadge";

import useIndexSource from "../hooks/useIndexSource";

import DeleteSourceDialog from "./DeleteSourceDialog";

import { useState } from "react";

export default function SourceDetails({source, onDeleted}) {

    const indexSource = useIndexSource();

    const [deleteOpen, setDeleteOpen] = useState(false);

    if (!source) {

        return (

            <Card>

                <CardContent className="flex h-full items-center justify-center p-12">

                    <p className="text-slate-400">

                        Select a source to view details.

                    </p>

                </CardContent>

            </Card>

        );

    }

    return (

        <Card>

            <CardHeader>

                <CardTitle>

                    {source.displayName}

                </CardTitle>

            </CardHeader>

            <CardContent className="space-y-5">

                <div>

                    <p className="text-sm text-slate-400">

                        Root Path

                    </p>

                    <p>

                        {source.rootPath}

                    </p>

                </div>

                <div>

                    <p className="text-sm text-slate-400">

                        Type

                    </p>

                    <p>

                        {source.type}

                    </p>

                </div>

                <div>

                    <p className="text-sm text-slate-400">

                        Status

                    </p>

                    <SourceStatusBadge status={source.status} />

                </div>

                <div>

                    <p className="text-sm text-slate-400">

                        Last Indexed

                    </p>

                    <p>

                        {

                            source.lastIndexedAt

                                ??

                            "Never"

                        }

                    </p>

                </div>

                <div className="flex gap-3">

                    <div className="flex gap-3">

                        <Button
                            disabled={indexSource.isPending}
                            onClick={() =>
                                indexSource.mutate(source.id)
                            }
                        >

                            {
                                indexSource.isPending ? "Indexing..." : "Start Indexing"
                            }

                        </Button>

                        <Button

                            variant="destructive"

                            onClick={() =>

                                setDeleteOpen(true)

                            }

                        >

                            Delete

                        </Button>

                        <DeleteSourceDialog

                            open={deleteOpen}

                            onOpenChange={setDeleteOpen}

                            source={source}

                            onDeleted={onDeleted}

                        />

                    </div>

                </div>

            </CardContent>

        </Card>

    );

}