export default function SearchHeader({

    query,

    totalResults

}) {

    return (

        <div>

            <h1 className="text-3xl font-bold">

                Search

            </h1>

            <p className="text-slate-400 mt-2">

                Found {totalResults} results for

                <span className="font-semibold">

                    {" "} "{query}"

                </span>

            </p>

        </div>

    );

}