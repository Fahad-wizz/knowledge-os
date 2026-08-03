import SearchResultCard from "./SearchResultCard";

export default function SearchResults({

    results,

    selected,

    onSelect

}) {

    if (!results || results.length === 0) {

        return (

            <div className="flex h-[650px] items-center justify-center rounded-xl border border-slate-800 bg-slate-900">

                <p className="text-slate-400">

                    No matching documents found.

                </p>

            </div>

        );

    }

    return (

        <div className="flex h-[650px] flex-col rounded-xl border border-slate-800 bg-slate-900">

            {/* Header */}

            <div className="border-b border-slate-800 px-5 py-4">

                <h2 className="text-lg font-semibold">

                    Search Results

                </h2>

                <p className="mt-1 text-sm text-slate-400">

                    {results.length} matching
                    {results.length === 1 ? " result" : " results"}

                </p>

            </div>

            {/* Result List */}

            <div className="flex-1 space-y-4 overflow-y-auto p-4">

                {

                    results.map(result => (

                        <SearchResultCard

                            key={result.chunkId}

                            result={result}

                            selected={
                                selected?.chunkId === result.chunkId
                            }

                            onClick={() =>

                                onSelect(result)

                            }

                        />

                    ))

                }

            </div>

        </div>

    );

}