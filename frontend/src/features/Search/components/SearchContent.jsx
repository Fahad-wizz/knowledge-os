import SearchResults from "./SearchResults";
import KnowledgePreview from "./KnowledgePreview";

export default function SearchContent({

    results,

    selectedResult,

    onSelect,

    isLoading,

    error

}) {

    if (isLoading) {

        return <p>Searching...</p>;

    }

    if (error) {

        return <p>Search failed.</p>;

    }

    return (

        <div className="grid grid-cols-12 gap-6">

            <div className="col-span-5">

                <SearchResults
                    results={results}
                    selectedResult={selectedResult}
                    onSelect={onSelect}
                />

            </div>

            <div className="col-span-7">

                <KnowledgePreview
                    result={selectedResult}
                />

            </div>

        </div>

    );

}