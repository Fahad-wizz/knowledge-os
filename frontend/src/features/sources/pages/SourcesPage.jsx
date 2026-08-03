import { useEffect, useState } from "react";

import DashboardLayout from "@/layouts/DashboardLayout";
import { Button } from "@/components/ui/button";

import useSources from "../hooks/useSources";

import SourceList from "../components/SourceList";
import SourceDetails from "../components/SourceDetails";

import AddSourceDialog from "../components/AddSourceDialog";
import EmptySources from "../components/EmptySources";
import SourceSkeleton from "../components/SourceSkeleton";

export default function SourcesPage() {

    const {
        data: sources = [],
        isLoading,
        error
    } = useSources();

    const [selectedSource, setSelectedSource] = useState(null);

    const [dialogOpen, setDialogOpen] = useState(false);

    useEffect(() => {

        if (
            sources.length > 0 &&
            (!selectedSource ||
                !sources.some(s => s.id === selectedSource.id))
        ) {

            setSelectedSource(sources[0]);

        }

    }, [sources, selectedSource]);

    if (isLoading) {

        return (

            <DashboardLayout>

                <div className="mb-8">

                    <div className="flex items-center justify-between">

                        <div>

                            <h1 className="text-4xl font-bold">

                                Sources

                            </h1>

                            <p className="mt-2 text-slate-400">

                                Manage your indexed knowledge sources.

                            </p>

                        </div>

                    </div>

                </div>

                <div className="grid gap-4">

                    <SourceSkeleton />
                    <SourceSkeleton />
                    <SourceSkeleton />

                </div>

            </DashboardLayout>

        );

    }

    if (error) {

        return (

            <DashboardLayout>

                <div className="p-8 text-red-500">

                    Failed to load knowledge sources.

                </div>

            </DashboardLayout>

        );

    }

    if (sources.length === 0) {

        return (

            <DashboardLayout>

                <div className="mb-8 flex items-center justify-between">

                    <div>

                        <h1 className="text-4xl font-bold">

                            Sources

                        </h1>

                        <p className="mt-2 text-slate-400">

                            Manage your indexed knowledge sources.

                        </p>

                    </div>

                    <Button
                        onClick={() => setDialogOpen(true)}
                    >

                        + Add Source

                    </Button>

                </div>

                <EmptySources />

                <AddSourceDialog
                    open={dialogOpen}
                    onOpenChange={setDialogOpen}
                />

            </DashboardLayout>

        );

    }

    return (

        <DashboardLayout>

            <div className="mb-8 flex items-center justify-between">

                <div>

                    <h1 className="text-4xl font-bold">

                        Sources

                    </h1>

                    <p className="mt-2 text-slate-400">

                        Manage your indexed knowledge sources.

                    </p>

                </div>

                <Button
                    onClick={() => setDialogOpen(true)}
                >

                    + Add Source

                </Button>

            </div>

            <div className="grid grid-cols-[340px_1fr] gap-6">

                <div>

                    <SourceList
                        sources={sources}
                        selected={selectedSource}
                        onSelect={setSelectedSource}
                    />

                </div>

                <div>

                    <SourceDetails
                        source={selectedSource}
                        onDeleted={() => setSelectedSource(null)}
                    />

                </div>

            </div>

            <AddSourceDialog
                open={dialogOpen}
                onOpenChange={setDialogOpen}
            />

        </DashboardLayout>

    );

}