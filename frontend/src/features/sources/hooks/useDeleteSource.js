import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteDocument } from "../api/sourceApi";

import { toast } from "sonner";

export default function useDeleteSource() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: deleteDocument,

        onSuccess() {

            toast.success("Document deleted.");

            queryClient.invalidateQueries({

                queryKey: ["documents"]

            });

        },

        onError() {

            toast.error("Delete failed.");

        }

    });

}