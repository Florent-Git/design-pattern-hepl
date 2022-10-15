import React from "react";
import { Human } from "../model/Entities";

export interface HumanEntityProps {
    human: Human
}

export function HumanEntity({human}: HumanEntityProps) {
    return (
        <div>
            { JSON.stringify(human) }
        </div>
    )
}