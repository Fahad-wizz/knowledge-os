import { Search } from "lucide-react";

export default function SearchHeader() {

    return (

        <div className="flex items-center justify-between">

            <div>

                <div className="flex items-center gap-3">

                    <Search className="h-8 w-8 text-blue-500" />

                    <h1 className="text-4xl font-bold">

                        Knowledge Search

                    </h1>

                </div>

                <p className="mt-3 text-slate-400">

                    Search instantly across your indexed documents using AI.

                </p>

            </div>

        </div>

    );

}