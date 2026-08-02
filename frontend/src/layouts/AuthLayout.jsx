import { Card } from "@/components/ui/card";

export default function AuthLayout({ children }) {
    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-6">

            <div className="mb-8 text-center">

                <h1 className="text-5xl font-bold text-white">
                    KnowledgeOS
                </h1>

                <p className="mt-3 text-slate-400">
                    AI-powered Local Knowledge Search Engine
                </p>

            </div>

            <Card className="w-full max-w-md p-8">

                {children}

            </Card>

        </div>
    );
}