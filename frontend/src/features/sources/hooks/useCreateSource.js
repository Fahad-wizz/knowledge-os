import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSource } from "../api/sourceApi";
import { toast } from "sonner";

export default function useCreateSource() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: createSource,

        onSuccess(newSource) {

            toast.success(

                `${newSource.displayName} added successfully.`

            );

            queryClient.invalidateQueries({

                queryKey: ["sources"]

            });

        },

        onError(error) {

            toast.error(

                error.response?.data?.message ??

                "Failed to create knowledge source."

            );

        }

    });

}