import { Search, Sparkles, X } from "lucide-react";

import { Input } from "@/components/ui/input";

export default function SearchInput({

    query,

    setQuery

}) {

    return (

        <div className="relative">

            <Search

                className="absolute left-5 top-4 h-5 w-5 text-slate-400"

            />

            <Input

                value={query}

                placeholder="Ask anything about your knowledge..."

                onChange={(e) =>

                    setQuery(e.target.value)

                }

                className="h-14 rounded-xl border-slate-700 bg-slate-900 pl-14 pr-24 text-base"

            />

            {

                query && (

                    <button

                        onClick={() =>

                            setQuery("")

                        }

                        className="absolute right-14 top-4 text-slate-400 hover:text-white"

                    >

                        <X className="h-5 w-5" />

                    </button>

                )

            }

            <Sparkles

                className="absolute right-5 top-4 h-5 w-5 text-blue-500"

            />

        </div>

    );

}