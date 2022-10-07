import { DirectoryTreeComponent } from "../components/DirectoryTreeComponent";
import { EntryDetailsComponent } from "../components/EntryDetails";
import { FileReceiver } from "../components/FileReceiver";

export function CompositePage() {
    return (
        <div className="w-full flex">
            <FileReceiver/>
            <div className="flex flex-col w-8/12">
                <DirectoryTreeComponent />
            </div>
            <div className="flex flex-col w-4/12">
                <EntryDetailsComponent/>
            </div>
        </div>
    )
}