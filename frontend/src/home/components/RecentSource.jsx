import useSources from "../../features/sources/hooks/useSources";
import SourceCard from "../../features/sources/components/SourceCard";

export default function RecentSource() {

    const {

        data: sources = [],

        isLoading,

        error

    } = useSources();

    if (isLoading) {

        return (

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

                Loading sources...

            </div>

        );

    }

    if (error) {

        return (

            <div className="rounded-2xl border border-red-800 bg-red-950/20 p-6">

                Failed to load sources.

            </div>

        );

    }

    return (

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <h2 className="mb-6 text-xl font-bold">

                Recent Sources

            </h2>

            {

                sources.length === 0 ? (

                    <p className="text-slate-400">

                        No knowledge sources available.

                    </p>

                ) : (

                    <div className="space-y-4">

                        {

                            sources.map(source => (

                                <SourceCard

                                    key={source.id}

                                    source={source}

                                    selected={false}

                                    onClick={() => {}}

                                />

                            ))

                        }

                    </div>

                )

            }

        </div>

    );

}