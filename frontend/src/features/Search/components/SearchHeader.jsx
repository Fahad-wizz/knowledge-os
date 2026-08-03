import { Search } from "lucide-react";

export default function SearchHeader({
    query,
    totalResults,
}) {
    return (
        <div className="space-y-2">

            <div className="flex items-center gap-3">

                <Search className="text-blue-500" size={28} />

                <h1 className="text-3xl font-bold">
                    Semantic Search
                </h1>

            </div>

            <p className="text-slate-400">

                {totalResults} {totalResults === 1 ? "result" : "results"} found for

                <span className="ml-2 font-semibold text-white">
                    "{query}"
                </span>

            </p>

        </div>
    );
}