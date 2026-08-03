import { useState } from "react";

import { Search } from "lucide-react";

import { useNavigate } from "react-router-dom";

import { Input } from "@/components/ui/input";

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
            className="mt-8"
        >

            <div className="relative">

                <Search
                    className="absolute left-4 top-3.5 h-5 w-5 text-slate-400"
                />

                <Input

                    className="h-12 pl-12"

                    placeholder="Search your knowledge..."

                    value={query}

                    onChange={e =>
                        setQuery(e.target.value)
                    }

                />

            </div>

        </form>

    );

}