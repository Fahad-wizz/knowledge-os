import { useRef } from "react";
import { UploadCloud } from "lucide-react";

import useUploadDocument from "../hooks/useUploadDocument";

export default function UploadCard() {

    const inputRef = useRef(null);

    const uploadMutation = useUploadDocument();

    function handleBrowse() {

        inputRef.current.click();

    }

    function handleFileChange(event) {

        const file = event.target.files[0];

        if (!file) {
            return;
        }

        uploadMutation.mutate(file);

    }

    return (

        <div
            className="
                rounded-2xl
                border
                border-slate-800
                bg-slate-900
                p-8
            "
        >

            <UploadCloud
                className="text-blue-500"
                size={48}
            />

            <h2 className="mt-4 text-2xl font-semibold">

                Upload Documents

            </h2>

            <p className="mt-2 text-slate-400">

                Upload PDF, DOCX or TXT files.

            </p>

            <button

                onClick={handleBrowse}

                disabled={uploadMutation.isPending}

                className="
                    mt-6
                    rounded-xl
                    bg-blue-600
                    px-6
                    py-3
                    transition
                    hover:bg-blue-700
                    disabled:opacity-50
                "

            >

                {

                    uploadMutation.isPending

                        ? "Uploading..."

                        : "Choose File"

                }

            </button>

            <input

                ref={inputRef}

                type="file"

                hidden

                accept=".pdf,.doc,.docx,.txt"

                onChange={handleFileChange}

            />

        </div>

    );

}