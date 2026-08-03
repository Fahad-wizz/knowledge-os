import {

    FolderPlus,

    Search,

    MessageSquare

} from "lucide-react";

import { Card } from "@/components/ui/card";

import { useNavigate } from "react-router-dom";

function Action({

    title,

    icon: Icon,

    onClick

}) {

    return (

        <Card

            onClick={onClick}

            className="cursor-pointer p-6 transition hover:border-blue-500 hover:shadow-lg"

        >

            <Icon className="mb-4 h-10 w-10 text-blue-500" />

            <h3 className="text-lg font-semibold">

                {title}

            </h3>

        </Card>

    );

}

export default function QuickActions() {

    const navigate = useNavigate();

    return (

        <section>

            <h2 className="mb-5 text-2xl font-bold">

                Quick Actions

            </h2>

            <div className="grid gap-6 md:grid-cols-3">

                <Action

                    title="Add Source"

                    icon={FolderPlus}

                    onClick={() =>
                        navigate("/sources")
                    }

                />

                <Action

                    title="Semantic Search"

                    icon={Search}

                    onClick={() =>
                        navigate("/search")
                    }

                />

                <Action

                    title="AI Chat"

                    icon={MessageSquare}

                    onClick={() =>
                        navigate("/chat")
                    }

                />

            </div>

        </section>

    );

}