import { DiceRoll } from './dice-roll.model';

export class CollisionModelResult {
  damage: number;
  hitLocation: any;
  diceOutput: string;
}

export class CollisionModel {
  static calculate(
    hp: number,
    velocity: number,
    isHardObject: boolean
  ): CollisionModelResult {
    const result = new CollisionModelResult();
    if (isHardObject) {
      hp *= 2;
    }

    const impactForce = (hp * velocity) / 100;
    const dice = new DiceRoll();

    const fullDice = Math.round(impactForce);
    let diceNumber = fullDice;
    let diceModifier = 0;

    if (impactForce < 1) {
      if (impactForce <= 0.25) {
        diceNumber = 1;
        diceModifier = -3;
      } else if (impactForce <= 0.5) {
        diceNumber = 1;
        diceModifier = -2;
      } else {
        diceNumber = 1;
        diceModifier = -1;
      }
    }

    result.damage = dice.rollDice(diceNumber, diceModifier).result;
    result.diceOutput = `${diceNumber}d${diceModifier < 0 ? diceModifier : ''}`;

    return result;
  }
}
