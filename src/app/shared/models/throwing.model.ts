import { Damage } from './damage.model';

export class ThrowingModel {
  distance_yards: number;
  thrust_damage_dice: number;
  thrust_damage_mod: number;
  thrust_damage_mod_text: string;
  damageFormula: string;
  damage: number;

  calculate(
    liftingStrength: number,
    itemWeight: number,
    extraEffortWillPenalty: number
  ) {
    const basicLift = Math.pow(liftingStrength, 2) / 5;
    const weightRatio = itemWeight / basicLift;
    let distanceMod = this.getWeightToDistance(weightRatio);
    if (extraEffortWillPenalty > 0) {
      const extraEffortPercentage = extraEffortWillPenalty * 0.05 + 1;
      distanceMod *= extraEffortPercentage;
    }
    // in yards
    this.distance_yards = distanceMod * liftingStrength;
    this.getThrustDamage(liftingStrength, itemWeight);
  }

  private getThrustDamage(liftingStrength: number, itemWeight: number) {
    const damage = new Damage().Damage(liftingStrength);
    let mod: number;
    let modText: string;
    const dice: number = parseInt(damage.thrust.split('d')[0], 10);

    if (itemWeight <= liftingStrength / 8) {
      mod = dice * -2;
      modText = '-2 per die';
    } else if (itemWeight <= liftingStrength / 4) {
      mod = dice * -1;
      modText = '-1 per die';
    } else if (itemWeight <= liftingStrength / 2) {
      mod = 0;
    } else if (itemWeight <= liftingStrength) {
      mod = dice;
      modText = '+1 per die';
    } else if (itemWeight <= liftingStrength * 2) {
      mod = 0;
    } else if (itemWeight <= liftingStrength * 4) {
      mod = Math.floor(dice * -0.5);
      modText = '-1/2 per die';
    } else if (itemWeight <= liftingStrength * 8) {
      mod = dice * -1;
      modText = '-1 per die';
    }

    this.thrust_damage_dice = dice;
    this.thrust_damage_mod = mod;
    this.thrust_damage_mod_text = modText;
    this.damageFormula = damage.thrust;
    this.damage = new Damage().RollDamage(
      this.damageFormula,
      this.thrust_damage_mod
    );
  }

  private getWeightToDistance(weightRatio: number): number {
    if (weightRatio <= 0.05) {
      return 3.5;
    } else if (weightRatio <= 0.1) {
      return 2.5;
    } else if (weightRatio <= 0.15) {
      return 2.0;
    } else if (weightRatio <= 0.2) {
      return 1.5;
    } else if (weightRatio <= 0.25) {
      return 1.2;
    } else if (weightRatio <= 0.3) {
      return 1.1;
    } else if (weightRatio <= 0.4) {
      return 1.0;
    } else if (weightRatio <= 0.5) {
      return 0.8;
    } else if (weightRatio <= 0.75) {
      return 0.7;
    } else if (weightRatio <= 1.0) {
      return 0.6;
    } else if (weightRatio <= 1.5) {
      return 0.4;
    } else if (weightRatio <= 2.0) {
      return 0.3;
    } else if (weightRatio <= 2.5) {
      return 0.25;
    } else if (weightRatio <= 3.0) {
      return 0.2;
    } else if (weightRatio <= 4.0) {
      return 0.15;
    } else if (weightRatio <= 5.0) {
      return 0.12;
    } else if (weightRatio <= 6.0) {
      return 0.1;
    } else if (weightRatio <= 7.0) {
      return 0.09;
    } else if (weightRatio <= 8.0) {
      return 0.08;
    } else if (weightRatio <= 9.0) {
      return 0.07;
    } else if (weightRatio <= 10.0) {
      return 0.06;
    } else if (weightRatio <= 12.0) {
      return 0.05;
    }

    return 0.0;
  }
}
