import { DiceRoll } from './dice-roll.model';

export class Character {
    traits: Trait[];
    skills: Skill[];
}

interface Meta {
    name: string;
    pointsSpent: number;
    referencePage: string;
}

export interface Trait extends Meta {
    modifierDescription: string;
}

export interface Skill extends Meta {
    level: number;
    relativeLevel: string;
    note: string;
    result?: DiceRoll;
}

