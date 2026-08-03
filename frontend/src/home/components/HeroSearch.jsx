import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSearch() {

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

        <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-3xl"
        >

            <input

                value={query}

                onChange={(e) =>

                    setQuery(e.target.value)

                }

                placeholder="Search your knowledge..."

                className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-6 py-5 text-lg"

            />

        </form>

    );

}