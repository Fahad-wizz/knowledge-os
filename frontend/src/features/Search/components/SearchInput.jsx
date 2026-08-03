import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

export default function SearchInput({
    initialQuery = "",
}) {

    const navigate = useNavigate();

    const [query, setQuery] = useState(initialQuery);

    useEffect(() => {

        setQuery(initialQuery);

    }, [initialQuery]);

    function handleSubmit(e) {

        e.preventDefault();

        if (!query.trim()) return;

        navigate(`/search?q=${encodeURIComponent(query.trim())}`);

    }

    return (

        <form
            onSubmit={handleSubmit}
            className="relative"
        >

            <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

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
                    py-4
                    pl-12
                    pr-5
                    text-lg
                    text-white
                    outline-none
                    transition
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/30
                "

            />

        </form>

    );

}