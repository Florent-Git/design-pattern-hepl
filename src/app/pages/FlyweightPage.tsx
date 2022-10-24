import React, { useState } from "react";
import { FlyweightStats } from "../components/FlyweightStats";
import { OptimizedWarrior, UnoptimizedWarrior } from "../model/Entities";

export function FlyweightPage() {
    return (
        <div className="flex justify-around">
            <FlyweightStats warriorFactory={UnoptimizedWarrior.create}/>
            <FlyweightStats warriorFactory={OptimizedWarrior.create}/>
        </div>
    )
}