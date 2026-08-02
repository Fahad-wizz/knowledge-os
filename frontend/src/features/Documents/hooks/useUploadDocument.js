import { useMutation, useQueryClient } from "@tanstack/react-query";

import { uploadDocument } from "../api/documentApi";

import { toast } from "sonner";

export default function useUploadDocument() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: uploadDocument,

        onSuccess() {

            toast.success("Document uploaded successfully.");

            queryClient.invalidateQueries({

                queryKey: ["documents"]

            });

        },

        onError(error) {

            toast.error(

                error.response?.data?.message ??

                "Upload failed."

            );

        }

    });

}