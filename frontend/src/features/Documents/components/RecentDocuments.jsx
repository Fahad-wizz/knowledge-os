import useDocuments from "../hooks/useDocuments";

export default function RecentDocuments() {

    const {

        data,

        isLoading,

        error

    } = useDocuments();

    if (isLoading) {

        return <p>Loading documents...</p>;

    }

    if (error) {

        return <p>Failed to load documents.</p>;

    }

    return (

        <div>

            <h2 className="text-2xl font-bold mb-4">

                Recent Documents

            </h2>

            {data.map(document => (

                <div
                    key={document.id}
                    className="border-b border-slate-800 py-4"
                >

                    <h3>

                        {document.originalFileName}

                    </h3>

                    <p>

                        {document.status}

                    </p>

                </div>

            ))}

        </div>

    );

}