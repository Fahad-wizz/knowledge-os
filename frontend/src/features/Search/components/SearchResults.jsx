import SearchResultCard from "./SearchResultCard";

export default function SearchResults({
    results,
    selectedResult,
    onSelect,
}) {

    return (

        <div className="space-y-3 overflow-y-auto max-h-[70vh] pr-2">

            {

                results.map((result) => (

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