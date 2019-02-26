import { DiceRoll } from './dice-roll.model';

interface IDamage {
    strength: number;
    thrust: string;
    swing: string;
}
export class Damage implements IDamage {
    strength: number;
    thrust: string;
    swing: string;

    get DamageChart(): IDamage[] { return this.getDamageChart(); }

    Damage(strength: number): IDamage {
        const dmg = new Damage();
        if (strength > 100) {
            const addDice = Math.floor((strength - 100) / 10);
            dmg.strength = strength;
            dmg.thrust = `${11 + addDice}d`;
            dmg.swing = `${13 + addDice}d`;
        } else {
            return this.DamageChart.find(x => x.strength === strength);
        }

        return dmg;
    }

    RollThrustDamage(AdditionalModifier: number) {
        return this.RollDamage(this.thrust, AdditionalModifier);
    }

    RollSwingDamage(AdditionalModifier: number) {
        return this.RollDamage(this.swing, AdditionalModifier);
    }

    RollDamage(damageFormula: string, AdditionalModifier: number) {
        if (damageFormula) {
            const parts = damageFormula.toUpperCase().split('D');
            const dice = parseInt(parts[0], 10);
            const mod = parts.length > 1 && parts[1].length > 0 ? parseInt(parts[1], 10) : 0;
            const diceRoller = new DiceRoll();
            const result = diceRoller.rollDice(dice, mod + AdditionalModifier).result;
            return result < 1 ? 1 : result;
        }
    }

    private getDamageChart(): IDamage[] {
        return [
            {
                'strength': 1,
                'thrust': '1d-6',
                'swing': '1d-5'
            },
            {
                'strength': 2,
                'thrust': '1d-6',
                'swing': '1d-5'
            },
            {
                'strength': 3,
                'thrust': '1d-5',
                'swing': '1d-4'
            },
            {
                'strength': 4,
                'thrust': '1d-5',
                'swing': '1d-4'
            },
            {
                'strength': 5,
                'thrust': '1d-4',
                'swing': '1d-3'
            },
            {
                'strength': 6,
                'thrust': '1d-4',
                'swing': '1d-3'
            },
            {
                'strength': 7,
                'thrust': '1d-3',
                'swing': '1d-2'
            },
            {
                'strength': 8,
                'thrust': '1d-3',
                'swing': '1d-2'
            },
            {
                'strength': 9,
                'thrust': '1d-2',
                'swing': '1d-1'
            },
            {
                'strength': 10,
                'thrust': '1d-2',
                'swing': '1d'
            },
            {
                'strength': 11,
                'thrust': '1d-1',
                'swing': '1d+1'
            },
            {
                'strength': 12,
                'thrust': '1d-1',
                'swing': '1d+2'
            },
            {
                'strength': 13,
                'thrust': '1d',
                'swing': '2d-1'
            },
            {
                'strength': 14,
                'thrust': '1d',
                'swing': '2d'
            },
            {
                'strength': 15,
                'thrust': '1d+1',
                'swing': '2d+1'
            },
            {
                'strength': 16,
                'thrust': '1d+1',
                'swing': '2d+2'
            },
            {
                'strength': 17,
                'thrust': '1d+2',
                'swing': '3d-1'
            },
            {
                'strength': 18,
                'thrust': '1d+2',
                'swing': '3d'
            },
            {
                'strength': 19,
                'thrust': '2d-1',
                'swing': '3d+1'
            },
            {
                'strength': 20,
                'thrust': '2d-1',
                'swing': '3d+2'
            },
            {
                'strength': 21,
                'thrust': '2d',
                'swing': '4d-1'
            },
            {
                'strength': 22,
                'thrust': '2d',
                'swing': '4d'
            },
            {
                'strength': 23,
                'thrust': '2d+1',
                'swing': '4d+1'
            },
            {
                'strength': 24,
                'thrust': '2d+1',
                'swing': '4d+2'
            },
            {
                'strength': 25,
                'thrust': '2d+2',
                'swing': '5d-1'
            },
            {
                'strength': 26,
                'thrust': '2d+2',
                'swing': '5d'
            },
            {
                'strength': 27,
                'thrust': '3d-1',
                'swing': '5d+1'
            },
            {
                'strength': 28,
                'thrust': '3d-1',
                'swing': '5d+1'
            },
            {
                'strength': 29,
                'thrust': '3d',
                'swing': '5d+2'
            },
            {
                'strength': 30,
                'thrust': '3d',
                'swing': '5d+2'
            },
            {
                'strength': 31,
                'thrust': '3d+1',
                'swing': '6d-1'
            },
            {
                'strength': 32,
                'thrust': '3d+1',
                'swing': '6d-1'
            },
            {
                'strength': 33,
                'thrust': '3d+2',
                'swing': '6d'
            },
            {
                'strength': 34,
                'thrust': '3d+2',
                'swing': '6d'
            },
            {
                'strength': 35,
                'thrust': '4d-1',
                'swing': '6d+1'
            },
            {
                'strength': 36,
                'thrust': '4d-1',
                'swing': '6d+1'
            },
            {
                'strength': 37,
                'thrust': '4d',
                'swing': '6d+2'
            },
            {
                'strength': 38,
                'thrust': '4d',
                'swing': '6d+2'
            },
            {
                'strength': 39,
                'thrust': '4d+1',
                'swing': '7d-1'
            },
            {
                'strength': 40,
                'thrust': '4d+1',
                'swing': '7d-1'
            },
            {
                'strength': 45,
                'thrust': '5d',
                'swing': '7d+1'
            },
            {
                'strength': 50,
                'thrust': '5d+2',
                'swing': '8d-1'
            },
            {
                'strength': 55,
                'thrust': '6d',
                'swing': '8d+1'
            },
            {
                'strength': 60,
                'thrust': '7d-1',
                'swing': '9d'
            },
            {
                'strength': 65,
                'thrust': '7d+1',
                'swing': '9d+2'
            },
            {
                'strength': 70,
                'thrust': '8d',
                'swing': '10d'
            },
            {
                'strength': 75,
                'thrust': '8d+2',
                'swing': '10d+2'
            },
            {
                'strength': 80,
                'thrust': '9d',
                'swing': '11d'
            },
            {
                'strength': 85,
                'thrust': '9d+2',
                'swing': '11d+2'
            },
            {
                'strength': 90,
                'thrust': '10d',
                'swing': '12d'
            },
            {
                'strength': 95,
                'thrust': '10d+2',
                'swing': '12d+2'
            },
            {
                'strength': 100,
                'thrust': '11d',
                'swing': '13d'
            }
        ];
    }
}
