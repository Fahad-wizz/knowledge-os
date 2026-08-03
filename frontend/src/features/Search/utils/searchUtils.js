export function getConfidence(score) {

    if (score >= 0.90) {

        return {

            label: "Excellent Match",

            color: "text-green-400"

        };

    }

    if (score >= 0.80) {

        return {

            label: "Strong Match",

            color: "text-emerald-400"

        };

    }

    if (score >= 0.70) {

        return {

            label: "Good Match",

            color: "text-yellow-400"

        };

    }

    return {

        label: "Related",

        color: "text-slate-400"

    };

}