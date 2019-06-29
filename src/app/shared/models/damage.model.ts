import { Strength } from './character.model';
import { DiceRoll } from './dice-roll.model';

export class Damage implements Strength {
    value: number;
    thrust: string;
    swing: string;

    get DamageChart(): Strength[] { return this.getDamageChart(); }

    Damage(strength: number): Damage {
        const dmg = new Damage();
        if (strength > 100) {
            const addDice = Math.floor((strength - 100) / 10);
            dmg.value = strength;
            dmg.thrust = `${11 + addDice}d`;
            dmg.swing = `${13 + addDice}d`;
        } else {
            return this.DamageChart.find(x => x.value === strength) as Damage;
        }

        return dmg;
    }

    RollThrustDamage(AdditionalModifier: number) {
        return this.RollDamage(this.thrust, AdditionalModifier);
    }

    RollSwingDamage(AdditionalModifier: number) {
        return this.RollDamage(this.swing, AdditionalModifier);
    }

    RollDamage(damageFormula: string, AdditionalModifier: number = 0) {
        if (damageFormula) {
            const parts = damageFormula.toUpperCase().split('D');
            const dice = parseInt(parts[0], 10);
            const mod = parts.length > 1 && parts[1].length > 0 ? parseInt(parts[1], 10) : 0;
            const diceRoller = new DiceRoll();
            const result = diceRoller.rollDice(dice, mod + AdditionalModifier).result;
            return result < 1 ? 1 : result;
        }
    }

    private getDamageChart(): Strength[] {
        return [
            {
                'value': 1,
                'thrust': '1d-6',
                'swing': '1d-5'
            },
            {
                'value': 2,
                'thrust': '1d-6',
                'swing': '1d-5'
            },
            {
                'value': 3,
                'thrust': '1d-5',
                'swing': '1d-4'
            },
            {
                'value': 4,
                'thrust': '1d-5',
                'swing': '1d-4'
            },
            {
                'value': 5,
                'thrust': '1d-4',
                'swing': '1d-3'
            },
            {
                'value': 6,
                'thrust': '1d-4',
                'swing': '1d-3'
            },
            {
                'value': 7,
                'thrust': '1d-3',
                'swing': '1d-2'
            },
            {
                'value': 8,
                'thrust': '1d-3',
                'swing': '1d-2'
            },
            {
                'value': 9,
                'thrust': '1d-2',
                'swing': '1d-1'
            },
            {
                'value': 10,
                'thrust': '1d-2',
                'swing': '1d'
            },
            {
                'value': 11,
                'thrust': '1d-1',
                'swing': '1d+1'
            },
            {
                'value': 12,
                'thrust': '1d-1',
                'swing': '1d+2'
            },
            {
                'value': 13,
                'thrust': '1d',
                'swing': '2d-1'
            },
            {
                'value': 14,
                'thrust': '1d',
                'swing': '2d'
            },
            {
                'value': 15,
                'thrust': '1d+1',
                'swing': '2d+1'
            },
            {
                'value': 16,
                'thrust': '1d+1',
                'swing': '2d+2'
            },
            {
                'value': 17,
                'thrust': '1d+2',
                'swing': '3d-1'
            },
            {
                'value': 18,
                'thrust': '1d+2',
                'swing': '3d'
            },
            {
                'value': 19,
                'thrust': '2d-1',
                'swing': '3d+1'
            },
            {
                'value': 20,
                'thrust': '2d-1',
                'swing': '3d+2'
            },
            {
                'value': 21,
                'thrust': '2d',
                'swing': '4d-1'
            },
            {
                'value': 22,
                'thrust': '2d',
                'swing': '4d'
            },
            {
                'value': 23,
                'thrust': '2d+1',
                'swing': '4d+1'
            },
            {
                'value': 24,
                'thrust': '2d+1',
                'swing': '4d+2'
            },
            {
                'value': 25,
                'thrust': '2d+2',
                'swing': '5d-1'
            },
            {
                'value': 26,
                'thrust': '2d+2',
                'swing': '5d'
            },
            {
                'value': 27,
                'thrust': '3d-1',
                'swing': '5d+1'
            },
            {
                'value': 28,
                'thrust': '3d-1',
                'swing': '5d+1'
            },
            {
                'value': 29,
                'thrust': '3d',
                'swing': '5d+2'
            },
            {
                'value': 30,
                'thrust': '3d',
                'swing': '5d+2'
            },
            {
                'value': 31,
                'thrust': '3d+1',
                'swing': '6d-1'
            },
            {
                'value': 32,
                'thrust': '3d+1',
                'swing': '6d-1'
            },
            {
                'value': 33,
                'thrust': '3d+2',
                'swing': '6d'
            },
            {
                'value': 34,
                'thrust': '3d+2',
                'swing': '6d'
            },
            {
                'value': 35,
                'thrust': '4d-1',
                'swing': '6d+1'
            },
            {
                'value': 36,
                'thrust': '4d-1',
                'swing': '6d+1'
            },
            {
                'value': 37,
                'thrust': '4d',
                'swing': '6d+2'
            },
            {
                'value': 38,
                'thrust': '4d',
                'swing': '6d+2'
            },
            {
                'value': 39,
                'thrust': '4d+1',
                'swing': '7d-1'
            },
            {
                'value': 40,
                'thrust': '4d+1',
                'swing': '7d-1'
            },
            {
                'value': 45,
                'thrust': '5d',
                'swing': '7d+1'
            },
            {
                'value': 50,
                'thrust': '5d+2',
                'swing': '8d-1'
            },
            {
                'value': 55,
                'thrust': '6d',
                'swing': '8d+1'
            },
            {
                'value': 60,
                'thrust': '7d-1',
                'swing': '9d'
            },
            {
                'value': 65,
                'thrust': '7d+1',
                'swing': '9d+2'
            },
            {
                'value': 70,
                'thrust': '8d',
                'swing': '10d'
            },
            {
                'value': 75,
                'thrust': '8d+2',
                'swing': '10d+2'
            },
            {
                'value': 80,
                'thrust': '9d',
                'swing': '11d'
            },
            {
                'value': 85,
                'thrust': '9d+2',
                'swing': '11d+2'
            },
            {
                'value': 90,
                'thrust': '10d',
                'swing': '12d'
            },
            {
                'value': 95,
                'thrust': '10d+2',
                'swing': '12d+2'
            },
            {
                'value': 100,
                'thrust': '11d',
                'swing': '13d'
            }
        ];
    }
}
