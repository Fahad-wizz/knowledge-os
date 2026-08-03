export default function KnowledgePreview({

    result

}) {

    if (!result) {

        return (

            <div className="rounded-xl border border-slate-800 p-8">

                Select a search result to preview it.

            </div>

        );

    }

    return (

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">

            <h2 className="text-xl font-bold">

                {result.documentName}

            </h2>

            <div className="mt-4 flex gap-3">

                <span className="rounded bg-blue-600 px-2 py-1 text-xs">

                    {Math.round(result.score * 100)}% Match

                </span>

                <span className="rounded bg-slate-700 px-2 py-1 text-xs">

                    Chunk #{result.chunkIndex}

                </span>

            </div>

            <div className="mt-6 rounded-lg bg-slate-950 p-5">

                <p className="leading-7 text-slate-300">

                    {result.snippet}

                </p>

            </div>

            <div className="mt-6">

                <button

                    className="
                        rounded-lg
                        bg-blue-600
                        px-4
                        py-2
                        font-medium
                        hover:bg-blue-700
                    "

                >

                    Ask AI about this

                </button>

            </div>

        </div>

    );

}