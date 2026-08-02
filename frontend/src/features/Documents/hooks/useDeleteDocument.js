import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteDocument } from "../api/documentApi";

import { toast } from "sonner";

export default function useDeleteDocument() {

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