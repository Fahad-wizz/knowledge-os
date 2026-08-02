import { Bot } from "lucide-react";

export default function QuickSearchCard() {

    return (

        <div
            className="
            rounded-2xl
            border
            border-slate-800
            bg-slate-900
            p-8"
        >

            <Bot
                size={40}
                className="text-emerald-500"
            />

            <h2 className="mt-4 text-xl font-semibold">

                Ask AI

            </h2>

            <p className="mt-2 text-slate-400">

                Ask questions about your uploaded documents.

            </p>

        </div>

    );

}