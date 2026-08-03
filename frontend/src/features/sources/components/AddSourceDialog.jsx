import { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import useCreateSource from "../hooks/useCreateSource";

export default function AddSourceDialog({

    open,
    onOpenChange

}) {

    const createSource = useCreateSource();

    const [displayName, setDisplayName] = useState("");

    const [rootPath, setRootPath] = useState("");

    const [type, setType] = useState("LOCAL_FOLDER");

    function resetForm() {

        setDisplayName("");
        setRootPath("");
        setType("LOCAL_FOLDER");

    }

    function handleSubmit(e) {

        e.preventDefault();

        if (!displayName.trim()) {
            return;
        }

        if (!rootPath.trim()) {
            return;
        }

        createSource.mutate(

            {
                displayName,
                rootPath,
                type
            },

            {

                onSuccess() {

                    resetForm();

                    onOpenChange(false);

                }

            }

        );

    }

    return (

        <Dialog
            open={open}
            onOpenChange={onOpenChange}
        >

            <DialogContent className="sm:max-w-lg">

                <DialogHeader>

                    <DialogTitle>

                        Add Knowledge Source

                    </DialogTitle>

                </DialogHeader>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <div className="space-y-2">

                        <Label htmlFor="displayName">

                            Display Name

                        </Label>

                        <Input
                            id="displayName"
                            value={displayName}
                            onChange={(e) =>
                                setDisplayName(e.target.value)
                            }
                            placeholder="Java Notes"
                        />

                    </div>

                    <div className="space-y-2">

                        <Label htmlFor="rootPath">

                            Root Folder

                        </Label>

                        <Input
                            id="rootPath"
                            value={rootPath}
                            onChange={(e) =>
                                setRootPath(e.target.value)
                            }
                            placeholder="D:\\Knowledge\\Java"
                        />

                    </div>

                    <div className="space-y-2">

                        <Label htmlFor="type">

                            Source Type

                        </Label>

                        <select
                            id="type"
                            value={type}
                            onChange={(e) =>
                                setType(e.target.value)
                            }
                            className="w-full rounded-md border bg-background px-3 py-2"
                        >

                            <option value="LOCAL_FOLDER">

                                Local Folder

                            </option>

                            <option value="FILE_UPLOAD">

                                File Upload

                            </option>

                        </select>

                    </div>

                    <DialogFooter>

                        <Button
                            type="submit"
                            disabled={createSource.isPending}
                        >

                            {

                                createSource.isPending

                                    ? "Creating..."

                                    : "Create Source"

                            }

                        </Button>

                    </DialogFooter>

                </form>

            </DialogContent>

        </Dialog>

    );

}