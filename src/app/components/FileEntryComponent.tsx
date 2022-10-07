import React from "react";
import { FileEntry } from "../model/Composite";

interface FileEntryProps {
    fileEntry: FileEntry
}

export function FileEntryComponent({fileEntry}: FileEntryProps) {
    return (
        <div className="flex items-center flex-col w-max m-5">
            <img src="https://via.placeholder.com/120" alt="" />
            <div>{ fileEntry.getName() }</div>
        </div>
    )
}