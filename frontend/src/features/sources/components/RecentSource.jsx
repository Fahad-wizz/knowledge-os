import useSource from "../hooks/useSource";
import SourceCard from "./SourceCard";

export default function RecentSource() {

    const {

        data: documents = [],

        isLoading,

        error

    } = useSource();

    if (isLoading) {

        return (

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

                Loading documents...

            </div>

        );

    }

    if (error) {

        return (

            <div className="rounded-2xl border border-red-800 bg-red-950/20 p-6">

                Failed to load documents.

            </div>

        );

    }

    return (

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <h2 className="mb-6 text-xl font-bold">

                Recent Documents

            </h2>

            {

                documents.length === 0 ?

                    (

                        <p className="text-slate-400">

                            No documents uploaded yet.

                        </p>

                    )

                    :

                    (

                        <div className="space-y-4">

                            {

                                documents.map(document => (

                                    <SourceCard

                                        key={document.id}

                                        document={document}

                                    />

                                ))

                            }

                        </div>

                    )

            }

        </div>

    );

}