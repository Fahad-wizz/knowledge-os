export default function SearchLoading() {

    return (

        <div className="grid grid-cols-[380px_1fr] gap-6">

            <div className="space-y-4">

                {

                    [...Array(5)].map((_, index) => (

                        <div

                            key={index}

                            className="h-36 animate-pulse rounded-xl bg-slate-800"

                        />

                    ))

                }

            </div>

            <div

                className="h-[650px] animate-pulse rounded-xl bg-slate-800"

            />

        </div>

    );

}