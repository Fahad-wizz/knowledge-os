import DashboardLayout from "@/layouts/DashboardLayout";

import useSource from "../hooks/useSource";
import SourceCard from "../components/SourceCard";

export default function SourcesPage() {

    const {

        data: documents = [],

        isLoading,

        error

    } = useSource();

    return (

        <DashboardLayout>

            <h1 className="mb-8 text-4xl font-bold">

                Documents

            </h1>

            {

                isLoading &&

                <p>

                    Loading...

                </p>

            }

            {

                error &&

                <p>

                    Failed to load documents.

                </p>

            }

            <div className="grid gap-6">

                {

                    documents.map(document => (

                        <SourceCard

                            key={document.id}

                            document={document}

                        />

                    ))

                }

            </div>

        </DashboardLayout>

    );

}