export class DiceRoll {
  dieResults: number[];
  result: number;
  marginOfSuccess: number; // pos/neg margin
  absoluteMargin: number; // pos representation
  success: boolean;

  rollDiceSet(numberOfDice: number, modifier: number, multiple: number, numberOfRolls: number, target: number): DiceRoll[] {
    const results: DiceRoll[] = [];
    if (!numberOfRolls) { numberOfRolls = 1; }
    for (let i = 0; i < numberOfRolls; i++) {
      results.push(this.rollDice(numberOfDice, modifier, multiple, target));
    }
    return results;
  }
  rollDice(numberOfDice: number, modifier?: number, multiple?: number, target?: number): DiceRoll {
    let result = 0;
    const dice = new Array(numberOfDice);
    for (let i = 1; i <= numberOfDice; i++) {
      const die = this.rollDie();
      dice[i - 1] = die;
      result += die;
    }
    result += modifier;
    if (result < 1) {
      result = 1;
    }
    if (multiple > 0) {
      result *= multiple;
    }
    const model = new DiceRoll();
    model.dieResults = dice;
    model.result = result;
    if (target) {
      model.marginOfSuccess = target - result;
    }
    model.absoluteMargin = Math.abs(model.marginOfSuccess);
    model.success = model.marginOfSuccess > -1;
    return model;
  }
  rollDie() {
    return Math.floor((Math.random() * 6) + 1);
  }
}
