import { Folder, InsertDriveFile } from "@mui/icons-material";
import React from "react";
import { ZipEntry } from "../model/Composite";
import { filesize } from "filesize";

export interface TreeLabelProps {
    entry: ZipEntry
}

export const TreeLabel = ({entry}: TreeLabelProps) => {
    switch (entry.getIconType()) {
        case "Directory": return (
            <div className="flex justify-between">
                <span>
                    <Folder />
                    { entry.getName() }
                </span>
                { filesize(entry.getSize()).toString() }
            </div>
        )
        case "File": return (
            <div className="flex justify-between">
                <span>
                    <InsertDriveFile />
                    { entry.getName() }
                </span>
                { filesize(entry.getSize()).toString() }
            </div>
        )
    }
}