import { filesize } from "filesize";
import { useState } from "react";
import { Human } from "../model/Entities";
import { HumanEntity } from "./WarriorEntity";
import sizeof from "object-sizeof"
import { getSizeOfHumans } from "../utils/ObjectSize";

export interface FlyweightStatsProps {
    warriorFactory: () => Human,
}

export function FlyweightStats({ warriorFactory }: FlyweightStatsProps) {
    const [array, setArray] = useState<Human[]>([]);

    const pushArray = () => {
        setArray([...array, warriorFactory()]);
        console.log(array);
    }

    return (
        <div className="flex flex-col w-full">
            <div className="flex-col">
                <h1 className="text-3xl">{warriorFactory().getName()}</h1>
                <div className="flex justify-between">
                    <div>Nombre d'instances&nbsp;&nbsp;&nbsp;</div>
                    <div>{array.length}</div>
                </div>
                <div className="flex justify-between">
                    <div>Taille des instances&nbsp;&nbsp;&nbsp;</div>
                    <div>{filesize(getSizeOfHumans(array)).toString()}</div>
                </div>
                <button onClick={pushArray} className="px-4 py-2 bg-teal-700 text-white rounded-lg my-4">Add Entity</button>
                <div className="flex flex-wrap">
                    { array.map(h => (<HumanEntity human={h}/>)) }
                </div>
            </div>
        </div>
    )
}