export interface ZipEntry {
    getPath(): string

    getSize(): number

    getName(): string

    getChildren(): ZipEntry[]

    addChild(child: ZipEntry): boolean

    removeChild(child: ZipEntry): boolean

    getParent(): ZipEntry | undefined

    setParent(parent: ZipEntry): void

    findChild(path: string): ZipEntry | undefined

    getIconType(): IconType
}

export class DirectoryEntry implements ZipEntry {
    private _children: ZipEntry[] = []
    private _parent: ZipEntry | undefined = undefined

    constructor(private _name: string, ...children: ZipEntry[]) { 
        this._children.push(...children);
    }

    getIconType(): IconType {
        return "Directory";
    }
    
    findChild(path: string): ZipEntry | undefined {
        console.log({thisPath: this.getPath(), path});
        if (this.getPath() === path) return this;
        let child;
        this._children.forEach(c => {
            child = c.findChild(path);
            if (child != undefined) return;
        });
        return child;
    }

    getName(): string {
        return this._name;
    }

    getChildren(): ZipEntry[] {
        return this._children;
    }

    addChild(child: ZipEntry): boolean {
        this._children.push(child);
        child.setParent(this);
        return true;
    }

    removeChild(child: ZipEntry): boolean {
        this._children.filter(c => c.getPath() === child.getPath());
        return true;
    }
    
    getPath(): string {
        return `${this._parent?.getPath()}/${this.getName()}`;
    }

    getSize(): number {
        return this._children
            .map(child => child.getSize())
            .reduce((a, b) => a + b);
    }

    getParent() {
        return this._parent;
    }

    setParent(value: ZipEntry) {
        this._parent = value;
    }
}

export class RootDirectoryEntry extends DirectoryEntry {
    constructor(...children: ZipEntry[]) {
        super("/", ...children);
    }

    findChild(path: string): ZipEntry | undefined {
        if (path === "/") return this;
        return super.findChild(path);
    }

    getPath(): string {
        return "";
    }
}

export class FileEntry implements ZipEntry {
    private _children: ZipEntry[] = [];
    private _parent: ZipEntry | undefined = undefined;
 
    constructor(private _name: string, private _size: number) {}

    getIconType(): IconType {
        return "File";
    }

    findChild(path: string): ZipEntry | undefined {
        if (this.getPath() === path) return this;
        return undefined;
    }

    getParent() {
        return this._parent;
    }

    setParent(parent: ZipEntry): void {
        this._parent = parent;
    }

    getName(): string {
        return this._name;
    }
    
    getChildren(): ZipEntry[] {
        return this._children;
    }
    
    addChild(child: ZipEntry): boolean { return false; }
    
    removeChild(child: ZipEntry): boolean { return false; }

    getPath(): string {
        return `${this._parent?.getPath()}/${this.getName()}`
    }

    getSize(): number {
        return this._size;
    }
}

export type IconType =
    "Directory"
    | "File"