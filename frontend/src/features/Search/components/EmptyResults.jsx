import { SearchX } from "lucide-react";

export default function EmptyResults() {

    return (

        <div className="flex min-h-[500px] flex-col items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-900 p-8 text-center">

            <SearchX
                size={56}
                className="mb-6 text-slate-500"
            />

            <h2 className="text-2xl font-semibold text-white">

                No Relevant Knowledge Found

            </h2>

            <p className="mt-3 max-w-md text-slate-400">

                We couldn't find any relevant information for your search.

                Try using broader keywords, checking your spelling,

                or indexing more documents.

            </p>

            <div className="mt-8 rounded-lg border border-slate-700 bg-slate-950 p-5 text-left">

                <h3 className="mb-3 font-medium text-white">

                    Suggestions

                </h3>

                <ul className="space-y-2 text-sm text-slate-400">

                    <li>• Use fewer words</li>

                    <li>• Try broader terms</li>

                    <li>• Search using concepts instead of filenames</li>

                    <li>• Upload or index additional knowledge sources</li>

                </ul>

            </div>

        </div>

    );

}