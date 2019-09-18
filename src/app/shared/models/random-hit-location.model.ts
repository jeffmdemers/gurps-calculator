import { DiceRoll } from './dice-roll.model';

export class RandomHitLocationResult{
//returns the body part name
//created as an object for future proofing
bodyPart: string;
}

export class RandomHitLocationOptions {
//future enhancement to allow optional body parts to be selected by user 
//based on Grand Unified Hit Locations
}

export class RandomHitLocation {
    static getRandomHitLocation(
// options: RandomHitLocationOptions
    ): RandomHitLocationResult {
        const result = new RandomHitLocationResult();
        const dice = new DiceRoll();
        let roll = dice.rollDice(3, 0).result;
        result.bodyPart = this.getLocation(roll);
        return result;
    };

    static getLocation(
        roll: number
    ) {
        //check for RandomHitLocationOptions in each case for additional details
        //basic only:
        switch (roll) {
            case 3:
            case 4:
                return "Skull";
            case 5:
                return "Face";
            case 6:
            case 7:
                return "Right Leg";
            case 8:
                return "Right Arm";
            case 9:
            case 10:
                return "Torso";
            case 11:
                return "Groin";
            case 12:
                return "Left Arm";
            case 13:
            case 14:
                return "Left Leg";
            case 15:
                return "Hand";
            case 16:
                return "Foot";
            case 17:
            case 18:
                return "Neck"
            default:
                return "Missed"
        }
    }
}