import { Badge } from "@/components/ui/badge";

export default function ConfidenceChip({

    confidence

}) {

    const percentage =

        Math.round(confidence * 100);

    let label = "Low";

    let color =

        "bg-red-600";

    if (percentage >= 90) {

        label = "Excellent";

        color = "bg-green-600";

    }

    else if (percentage >= 75) {

        label = "High";

        color = "bg-blue-600";

    }

    else if (percentage >= 60) {

        label = "Good";

        color =

            "bg-yellow-500 text-black";

    }

    return (

        <Badge className={color}>

            {label}

            {" • "}

            {percentage}%

        </Badge>

    );

}