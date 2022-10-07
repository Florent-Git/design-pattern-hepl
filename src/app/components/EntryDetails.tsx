import React from "react";
import { useAppSelector } from "../state/hooks";

export function EntryDetailsComponent() {
    const entry = useAppSelector(state => state.zipBrowser.selected);

    return (
        <>
            <h1 className="text-xl">{entry?.getName()}</h1>
        </>
    )
}