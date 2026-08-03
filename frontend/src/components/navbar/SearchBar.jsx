import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function SearchBar() {
    const navigate = useNavigate();

    const [query, setQuery] = useState("");

    function handleSubmit(e) {

        e.preventDefault();

        if (!query.trim()) {

            return;

        }

        navigate(

            `/search?q=${encodeURIComponent(query)}`

        );

    }

    return (

        <div className="relative w-full max-w-md">

            <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
            />

            <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-3xl"
            >

            <input

                value={query}

                onChange={(e) =>

                    setQuery(e.target.value)

                }

                type="text"
                placeholder="Search documents..."
                className="
                    w-full
                    rounded-xl
                    border
                    border-slate-700
                    bg-slate-900
                    py-2
                    pl-10
                    pr-4
                    text-sm
                    outline-none
                    transition
                    focus:border-blue-500
                "
            />
            </form>

        </div>

    );

}