import { Search } from "lucide-react";

export default function SearchBar() {

    return (

        <div className="relative w-full max-w-md">

            <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
            />

            <input
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

        </div>

    );

}