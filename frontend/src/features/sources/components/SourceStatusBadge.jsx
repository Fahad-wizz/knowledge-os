import { Badge } from "@/components/ui/badge";

export default function SourceStatusBadge({

    status

}) {

    switch (status) {

        case "ACTIVE":

            return (

                <Badge className="bg-green-600">

                    Active

                </Badge>

            );

        case "INDEXING":

            return (

                <Badge className="bg-yellow-500">

                    Indexing

                </Badge>

            );

        case "FAILED":

            return (

                <Badge variant="destructive">

                    Failed

                </Badge>

            );

        default:

            return (

                <Badge>

                    {status}

                </Badge>

            );

    }

}