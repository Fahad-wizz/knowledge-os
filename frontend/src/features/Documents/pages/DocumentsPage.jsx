import DashboardLayout from "@/layouts/DashboardLayout";

import useDocuments from "../hooks/useDocuments";
import DocumentCard from "../components/DocumentCard";

export default function DocumentsPage() {

    const {

        data: documents = [],

        isLoading,

        error

    } = useDocuments();

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

                        <DocumentCard

                            key={document.id}

                            document={document}

                        />

                    ))

                }

            </div>

        </DashboardLayout>

    );

}