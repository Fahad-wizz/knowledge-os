import { useMutation, useQueryClient } from "@tanstack/react-query";
import { indexSource } from "../api/sourceApi";
import { toast } from "sonner";

export default function useIndexSource() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: indexSource,

        onSuccess(summary) {
            toast.success(
                `Indexed ${summary.indexed}, skipped ${summary.skipped}, failed ${summary.failed}.`
            );

            queryClient.invalidateQueries({

                queryKey: ["sources"]

            });

        },

        onError(error) {

            toast.error(

                error.response?.data?.message ??

                "Indexing failed."

            );

        }

    });

}