import { Badge } from "@/components/ui/badge";

export default function SimilarityBadge({

    score

}) {

    const percentage =

        Math.round(score * 100);

    let className =

        "bg-red-500";

    if (percentage >= 90) {

        className = "bg-green-500";

    }

    else if (percentage >= 75) {

        className = "bg-blue-500";

    }

    else if (percentage >= 60) {

        className = "bg-yellow-500 text-black";

    }

    return (

        <Badge

            className={className}

        >

            {percentage}%

        </Badge>

    );

}