import React, { useState } from "react";
import { FlyweightStats } from "../components/FlyweightStats";
import { OptimizedWarrior, UnoptimizedWarrior } from "../model/Entities";
import { useStateArray } from "../utils/Hooks";

export function FlyweightPage() {
    return (
        <div className="flex justify-around">
            <FlyweightStats warriorFactory={UnoptimizedWarrior.create}/>
            <FlyweightStats warriorFactory={OptimizedWarrior.create}/>
        </div>
    )
}