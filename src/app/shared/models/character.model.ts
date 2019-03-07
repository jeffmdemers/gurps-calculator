import { DiceRoll } from './dice-roll.model';

export class Character {
    identity: Identity;
    status: Status;
    traits: Trait[];
    skills: Skill[];
}

export interface Status {
    HP: StatusIncrement;
    FP: StatusIncrement;
}

export interface StatusIncrement {
    Max: number;
    Current: number;
    Levels: StatusLevel[];
}

export interface StatusLevel {
    name: string;
    description: string;
    threshold: number;
}

export interface Identity {
    name: string;
    title: string;
    religion: string;
}

export interface MetaIdentity {
    player: string;
    campaign: string;
    createdOn: Date;
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

