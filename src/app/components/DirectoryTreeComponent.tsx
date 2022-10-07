import { useAppDispatch, useAppSelector } from "../state/hooks";
import { selectEntry } from "../state/zipBrowserSlice";
import { IconType, ZipEntry } from "../model/Composite";
import { TreeItem, TreeView } from "@mui/lab";
import { ExpandLess, ExpandMore, Folder, InsertDriveFile } from "@mui/icons-material";
import { TreeLabel } from "./TreeLabel";

export function DirectoryTreeComponent() {
    const root = useAppSelector(app => app.zipBrowser.root);
    const dispatch = useAppDispatch();
    
    const renderTree = (node: ZipEntry) => (
        <TreeItem key={node.getPath()} nodeId={node.getPath()} label={<TreeLabel entry={ node }/>}>
            {
                node.getChildren()
                    .sort((node) => node.getChildren().length > 0 ? -1 : 1)
                    .map((node) => renderTree(node))
            }
        </TreeItem>
    )

    const onSelected = (_: any, id: string) => {
        console.log({_, id});
        const selection = root?.findChild(id);
        if (selection != undefined) dispatch(selectEntry(selection))
    }

    return (
        <TreeView
            onNodeSelect={onSelected}
            defaultCollapseIcon={<ExpandMore/>}
            defaultExpandIcon={<ExpandLess/>}>
            {root != undefined &&
                renderTree(root)
            }
        </TreeView>
    )
}