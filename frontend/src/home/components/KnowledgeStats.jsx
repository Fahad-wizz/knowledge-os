import {
    Database,
    FileText,
    FolderOpen,
    Clock
} from "lucide-react";

import {
    Card,
    CardContent
} from "@/components/ui/card";

function StatCard({

    title,
    value,
    icon: Icon

}) {

    return (

        <Card>

            <CardContent className="flex items-center justify-between p-6">

                <div>

                    <p className="text-sm text-slate-400">

                        {title}

                    </p>

                    <h2 className="mt-2 text-3xl font-bold">

                        {value}

                    </h2>

                </div>

                <Icon className="h-10 w-10 text-blue-500" />

            </CardContent>

        </Card>

    );

}

export default function KnowledgeStats({

    dashboard

}) {

    return (

        <section>

            <h2 className="mb-5 text-2xl font-bold">

                Knowledge Base

            </h2>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                <StatCard
                    title="Sources"
                    value={dashboard.sources}
                    icon={FolderOpen}
                />

                <StatCard
                    title="Documents"
                    value={dashboard.documents}
                    icon={FileText}
                />

                <StatCard
                    title="Chunks"
                    value={dashboard.chunks}
                    icon={Database}
                />

                <StatCard
                    title="Last Indexed"
                    value={
                        dashboard.lastIndexedAt
                            ? new Date(
                                  dashboard.lastIndexedAt
                              ).toLocaleDateString()
                            : "Never"
                    }
                    icon={Clock}
                />

            </div>

        </section>

    );

}