import { UploadCloud } from "lucide-react";

export default function UploadCard() {

    return (

        <button
            className="
            w-full
            rounded-2xl
            border
            border-slate-800
            bg-slate-900
            p-8
            text-left
            transition
            hover:border-blue-500
            hover:bg-slate-800"
        >

            <UploadCloud
                size={40}
                className="text-blue-500"
            />

            <h2 className="mt-4 text-xl font-semibold">

                Upload Documents

            </h2>

            <p className="mt-2 text-slate-400">

                Upload PDFs, DOCX and TXT files.

            </p>

        </button>

    );

}