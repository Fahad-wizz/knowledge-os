import { FileText } from "lucide-react";

export default function RecentDocuments() {

    const documents = [

        "Spring Security.pdf",

        "Resume.pdf",

        "Docker Notes.pdf"

    ];

    return (

        <div
            className="
            rounded-2xl
            border
            border-slate-800
            bg-slate-900
            p-8"
        >

            <h2 className="mb-6 text-xl font-semibold">

                Recent Documents

            </h2>

            <div className="space-y-4">

                {documents.map(document => (

                    <div
                        key={document}
                        className="flex items-center gap-3"
                    >

                        <FileText size={18}/>

                        {document}

                    </div>

                ))}

            </div>

        </div>

    );

}