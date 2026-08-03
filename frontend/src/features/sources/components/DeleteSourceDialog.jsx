import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import useDeleteSource from "../hooks/useDeleteSource";

export default function DeleteSourceDialog({

    open,
    onOpenChange,
    source,
    onDeleted

}) {

    const deleteSource = useDeleteSource();

    if (!source) return null;

    function handleDelete() {

        deleteSource.mutate(

            source.id,

            {

                onSuccess() {

                    onOpenChange(false);

                    onDeleted?.();

                }

            }

        );

    }

    return (

        <AlertDialog
            open={open}
            onOpenChange={onOpenChange}
        >

            <AlertDialogContent>

                <AlertDialogHeader>

                    <AlertDialogTitle>

                        Delete Source?

                    </AlertDialogTitle>

                    <AlertDialogDescription>

                        This will remove

                        <strong>

                            {" "}{source.displayName}

                        </strong>

                        .

                        This action cannot be undone.

                    </AlertDialogDescription>

                </AlertDialogHeader>

                <AlertDialogFooter>

                    <AlertDialogCancel>

                        Cancel

                    </AlertDialogCancel>

                    <AlertDialogAction

                        onClick={handleDelete}

                    >

                        Delete

                    </AlertDialogAction>

                </AlertDialogFooter>

            </AlertDialogContent>

        </AlertDialog>

    );

}