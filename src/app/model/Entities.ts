export interface Position {
    x: number;
    y: number;
}

export interface Human {
    getName(): string
    getPosition(): Position
    getAttack(): number
    getDefense(): number
}

export class UnoptimizedWarrior implements Human {
    static create(): Human {
        return new UnoptimizedWarrior(
            "Unoptimized Warrior",
            {x: Math.random(), y: Math.random()},
            50,
            20
        )
    }

    private constructor(
        private name: string,
        private position: Position,
        private attack: number,
        private defense: number
    ) { }

    getName(): string {
        return this.name;
    }

    getPosition(): Position {
        return this.position;
    }

    getAttack(): number {
        return this.attack;
    }

    getDefense(): number {
        return this.defense;
    }
}

export class OptimizedWarrior implements Human {
    static create(): Human {
        return new OptimizedWarrior(
            {x: Math.random(), y: Math.random()}, 
            WarriorStats.getInstance()
        );
    }

    private constructor(
        private position: Position,
        private stats: WarriorStats
    ) { }

    getName(): string {
        return this.stats.name;
    }

    getPosition(): Position {
        return this.position;
    }

    getAttack(): number {
        return this.stats.attack;
    }

    getDefense(): number {
        return this.stats.defense;
    }
}

export class WarriorStats {
    private static instance: WarriorStats;

    static getInstance() {
        if (WarriorStats.instance === undefined) 
            WarriorStats.instance = new WarriorStats("Optimized Warrior", 50, 20)

        return WarriorStats.instance;
    }

    private constructor(
        public readonly name: string,
        public readonly attack: number,
        public readonly defense: number
    ) {}
}