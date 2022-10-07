import { Position, Color, Size } from "./Position";

export class UnoptimizedCubeData {
    constructor(
        private position: Position, 
        private color: Color, 
        private size: Size
    ) { }
}