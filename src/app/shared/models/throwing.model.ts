import { Damage } from './damage.model';

export class ThrowingModel {
    distance_yards: number;
    thrust_damage_dice: number;
    thrust_damage_mod: number;
    thrust_damage_mod_text: string;
    damageFormula: string;
    damage: number;

    calculate(liftingStrength: number, itemWeight: number, extraEffortWillPenalty: number) {
        const basicLift = Math.pow(liftingStrength, 2) / 5;
        const weightRatio = itemWeight / basicLift;
        let distanceMod = this.getWeightToDistance(weightRatio);
        if (extraEffortWillPenalty > 0) {
            const extraEffortPercentage = extraEffortWillPenalty * .05 + 1;
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
            mod = dice * -2; modText = '-2 per die';
        } else if (itemWeight <= liftingStrength / 4) {
            mod = dice * -1; modText = '-1 per die';
        } else if (itemWeight <= liftingStrength / 2) {
            mod = 0;
        } else if (itemWeight <= liftingStrength) {
            mod = dice; modText = '+1 per die';
        } else if (itemWeight <= liftingStrength * 2) {
            mod = 0;
        } else if (itemWeight <= liftingStrength * 4) {
            mod = Math.floor(dice * -.5); modText = '-1/2 per die';
        } else if (itemWeight <= liftingStrength * 8) {
            mod = dice * -1; modText = '-1 per die';
        }

        this.thrust_damage_dice = dice;
        this.thrust_damage_mod = mod;
        this.thrust_damage_mod_text = modText;
        this.damageFormula = damage.thrust;
        this.damage = new Damage().RollDamage(this.damageFormula, this.thrust_damage_mod);
    }


    private getWeightToDistance(weightRatio: number): number {
        if (weightRatio <= 0.05) {
            return 3.50;
        } else if (weightRatio <= 0.10) {
            return 2.50;
        } else if (weightRatio <= 0.15) {
            return 2.00;
        } else if (weightRatio <= 0.20) {
            return 1.50;
        } else if (weightRatio <= 0.25) {
            return 1.20;
        } else if (weightRatio <= 0.30) {
            return 1.10;
        } else if (weightRatio <= 0.40) {
            return 1.00;
        } else if (weightRatio <= 0.50) {
            return 0.80;
        } else if (weightRatio <= 0.75) {
            return 0.70;
        } else if (weightRatio <= 1.00) {
            return 0.60;
        } else if (weightRatio <= 1.50) {
            return 0.40;
        } else if (weightRatio <= 2.00) {
            return 0.30;
        } else if (weightRatio <= 2.50) {
            return 0.25;
        } else if (weightRatio <= 3.00) {
            return 0.20;
        } else if (weightRatio <= 4.00) {
            return 0.15;
        } else if (weightRatio <= 5.00) {
            return 0.12;
        } else if (weightRatio <= 6.00) {
            return 0.10;
        } else if (weightRatio <= 7.00) {
            return 0.09;
        } else if (weightRatio <= 8.00) {
            return 0.08;
        } else if (weightRatio <= 9.00) {
            return 0.07;
        } else if (weightRatio <= 10.00) {
            return 0.06;
        } else if (weightRatio <= 12.00) {
            return 0.05;
        }

        return 0.00;
    }
}
