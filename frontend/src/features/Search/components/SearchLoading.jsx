export default function SearchLoading() {

    return (

        <div className="space-y-4">

            {[...Array(5)].map((_, index) => (

                <div
                    key={index}
                    className="animate-pulse rounded-xl border border-slate-800 bg-slate-900 p-5"
                >

                    <div className="mb-4 h-5 w-2/3 rounded bg-slate-700" />

                    <div className="mb-2 h-3 w-1/3 rounded bg-slate-800" />

                    <div className="space-y-2">

                        <div className="h-3 rounded bg-slate-800" />

                        <div className="h-3 w-11/12 rounded bg-slate-800" />

                        <div className="h-3 w-4/5 rounded bg-slate-800" />

                    </div>

                </div>

            ))}

        </div>

    );

}