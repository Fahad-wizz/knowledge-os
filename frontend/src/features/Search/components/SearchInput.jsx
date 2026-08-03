import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchInput({ initialQuery = "" }) {

    const navigate = useNavigate();

    const [query, setQuery] = useState(initialQuery);

    useEffect(() => {

        setQuery(initialQuery);

    }, [initialQuery]);

    function handleSubmit(e) {

        e.preventDefault();

        if (!query.trim()) return;

        navigate(

            `/search?q=${encodeURIComponent(query.trim())}`

        );

    }

    return (

        <form
            onSubmit={handleSubmit}
            className="w-full"
        >

            <input

                type="text"

                value={query}

                onChange={(e) => setQuery(e.target.value)}

                placeholder="Search your knowledge..."

                className="
                    w-full
                    rounded-xl
                    border
                    border-slate-700
                    bg-slate-900
                    px-5
                    py-4
                    text-lg
                    outline-none
                    focus:border-blue-500
                "

            />

        </form>

    );

}