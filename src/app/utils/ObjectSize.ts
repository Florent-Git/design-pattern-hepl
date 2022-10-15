import sizeof from "object-sizeof";
import { Human, WarriorStats } from "../model/Entities";

export function getSizeOfHumans(humanArray: Human[]) {
    return humanArray.length > 0 && humanArray[0].getName() === "Unoptimized Warrior"
        ? humanArray.map(h => sizeof(h))
            .reduce((a, b) => a + b, 0)
        : humanArray.map(h => sizeof(h))
            .reduce((a, b) => a + b, 0) - (sizeof(WarriorStats.getInstance()) * (humanArray.length - 1))
}