import { useMutation, useQueryClient } from "@tanstack/react-query";

import { uploadSource } from "../api/sourceApi";

import { toast } from "sonner";

export default function useUploadSource() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: uploadSource,

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