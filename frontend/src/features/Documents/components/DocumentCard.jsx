import { FileText } from "lucide-react";

export default function DocumentCard({ document }) {

    function formatSize(bytes) {

        if (bytes < 1024) return `${bytes} B`;

        if (bytes < 1024 * 1024)
            return `${(bytes / 1024).toFixed(1)} KB`;

        return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;

    }

    return (

        <div
            className="
                flex
                items-center
                justify-between
                rounded-xl
                border
                border-slate-800
                bg-slate-900
                p-4
            "
        >

            <div className="flex items-center gap-4">

                <div className="rounded-lg bg-blue-600/20 p-3">

                    <FileText className="text-blue-500"/>

                </div>

                <div>

                    <h3 className="font-medium">

                        {document.originalFileName}

                    </h3>

                    <p className="text-sm text-slate-400">

                        {formatSize(document.fileSize)}

                    </p>

                </div>

            </div>

            <span
                className="
                    rounded-full
                    bg-emerald-600/20
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    text-emerald-400
                "
            >

                {document.status}

            </span>

        </div>

    );

}