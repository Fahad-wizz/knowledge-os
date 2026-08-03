import { Sparkles } from "lucide-react";

const suggestions = [

    "Explain Spring Boot Dependency Injection",

    "Summarize my Python notes",

    "Show Python code examples",

    "What is JWT?",

    "Explain Java Collections"

];

export default function EmptyChat({

    onQuestionClick

}) {

    return (

        <div className="flex h-full flex-col items-center justify-center px-10">

            <Sparkles

                className="mb-5 h-14 w-14 text-blue-500"

            />

            <h2 className="text-3xl font-bold">

                Welcome to KnowledgeOS AI

            </h2>

            <p className="mt-4 max-w-xl text-center text-slate-400">

                Ask questions about your uploaded knowledge and receive AI-powered answers with document citations.

            </p>

            <div className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-4">

                {

                    suggestions.map(question => (

                        <button

                            key={question}

                            onClick={() =>

                                onQuestionClick(question)

                            }

                            className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-left transition hover:border-blue-500 hover:bg-slate-800"

                        >

                            {question}

                        </button>

                    ))

                }

            </div>

        </div>

    );

}