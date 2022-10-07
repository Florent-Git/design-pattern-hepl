import JSZip from "jszip";
import { DirectoryEntry, FileEntry, RootDirectoryEntry, ZipEntry } from "../model/Composite";

export function parseZipFile(zip: JSZip) {
    const root = new RootDirectoryEntry();

    zip.forEach((path, file) => {
        const pathComponents = path.split("/").filter(path => path !== "");

        const entry: ZipEntry = file.dir
            ? new DirectoryEntry(pathComponents[pathComponents.length - 1])
            // @ts-ignore
            : new FileEntry(pathComponents[pathComponents.length - 1], file._data.uncompressedSize);

        const parent = root.findChild(`/${pathComponents.slice(0, -1).join('/')}`)
        parent?.addChild(entry)
    });

    return root;
}