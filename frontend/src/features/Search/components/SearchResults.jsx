import SearchResultCard from "./SearchResultCard";

export default function SearchResults({

    results,

    selectedResult,

    onSelect

}) {

    if (results.length === 0) {

        return (

            <div className="rounded-xl border border-slate-800 p-6">

                No matching results.

            </div>

        );

    }

    return (

        <div className="space-y-3">

            {

                results.map(result => (

                    <SearchResultCard

                        key={result.chunkId}

                        result={result}

                        selected={
                            selectedResult?.chunkId === result.chunkId
                        }

                        onClick={() => onSelect(result)}

                    />

                ))

            }

        </div>

    );

}