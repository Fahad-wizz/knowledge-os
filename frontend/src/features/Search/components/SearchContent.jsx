import EmptyResults from "./EmptyResults";
import KnowledgePreview from "./KnowledgePreview";
import SearchLoading from "./SearchLoading";
import SearchResults from "./SearchResults";

export default function SearchContent({

    results,

    selectedResult,

    onSelect,

    isLoading,

    error,

    query

}) {

    if (isLoading) {

        return <SearchLoading />;

    }

    if (error) {

        return (

            <div className="rounded-xl border border-red-500 bg-red-500/10 p-6">

                Failed to search documents.

            </div>

        );

    }

    if (!results.length) {

        return <EmptyResults />;

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
                    query={query}
                />

            </div>

        </div>

    );

}