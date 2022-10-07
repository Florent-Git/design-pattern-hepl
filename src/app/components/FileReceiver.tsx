import React, { DragEvent } from "react";
import JSZip from "jszip";
import { parseZipFile } from "../utils/ZipParser";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { loadRoot } from "../state/zipBrowserSlice";

export function FileReceiver() {
    const root = useAppSelector(state => state.zipBrowser.root);
    const dispatch = useAppDispatch();

    async function onDrop(ev: DragEvent<HTMLDivElement>) {
        ev.preventDefault();
        ev.stopPropagation();

        const zipFile = ev.dataTransfer.files[0];
        const zip = new JSZip();
        await zip.loadAsync(zipFile);

        const root = parseZipFile(zip);
        dispatch(loadRoot(root));
    }

    function onDragOver(ev: DragEvent<HTMLDivElement>) {
        ev.preventDefault();
        ev.stopPropagation();
    }

    return (
        <>
            {root === undefined &&
                <div className="fixed w-full h-full bg-[#66666666]">
                    <div onDrop={onDrop} onDragOver={onDragOver} className="relative drop-shadow-lg w-1/3 h-1/3 center-el bg-slate-900 rounded-lg">
                        <div className="relative center-el text-center text-white text-4xl">Déposer un fichier...</div>
                    </div>
                </div>
            }
        </>
    )
}
