import { FolderOpen } from "lucide-react";

export default function EmptySources() {

    return (

        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-20">

            <FolderOpen className="mb-4 h-12 w-12 text-slate-400" />

            <h2 className="text-xl font-semibold">

                No Knowledge Sources

            </h2>

            <p className="mt-2 text-slate-500">

                Add your first folder to start building your knowledge base.

            </p>

        </div>

    );

}