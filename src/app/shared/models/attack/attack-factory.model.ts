import { Attack, MeleeAttack, RangedAttack } from '../attack.model';
import { DamageType } from '../damage.model';

class LegacyJsonDamageTypeMapping {
  private static readonly map: object = {
    1: DamageType.TOXIC,
    2: DamageType.BURNING,
    4: DamageType.CORROSIVE,
    5: DamageType.CRUSHING,
    7: DamageType.CUTTING,
    8: DamageType.FATIGUE,
    9: DamageType.IMPALING,
    10: DamageType.PIERCING_SMALL,
    11: DamageType.PIERCING,
    12: DamageType.PIERCING_LARGE,
    13: DamageType.PIERCING_HUGE,
  };

  public static fromJson(jsonValue: number): string {
    const result = LegacyJsonDamageTypeMapping.map[jsonValue];
    if (result === undefined) {
      throw new Error(
        `Damage type encoded as ${jsonValue} in the legacy gCalc JSON is not supported, supported types are: ${Object.keys(
          LegacyJsonDamageTypeMapping.map
        )
          .map((key: any) => LegacyJsonDamageTypeMapping.map[key])
          .join(', ')}`
      );
    }

    return result;
  }
}

export interface AttackFactory {
  fromLegacyJson(json): Attack;
}

export class MeleeAttackFactory implements AttackFactory {
  fromLegacyJson(json): Attack {
    const name = json.Title;
    const usage = json.Usage;
    const skill = json.Skill;
    const damageType = new DamageType(
      LegacyJsonDamageTypeMapping.fromJson(json.DamageType)
    );
    const damageDice = json.DamageDice;
    const damageModifier = json.DamageModifier;
    const damageMultiplier =
      json.DamageMultiplier === 0 ? 1 : json.DamageMultiplier;
    const armorDivisor = json.ArmorDivisor === 0 ? 1 : json.ArmorDivisor;
    const reach = json.Reach;
    const block = json.Block;
    const parry = json.Parry;

    return new MeleeAttack({
      name,
      usage,
      skill,
      damageType,
      damageDice,
      damageModifier,
      damageMultiplier,
      armorDivisor,
      reach,
      block,
      parry,
    });
  }
}

export class RangedAttackFactory implements AttackFactory {
  fromLegacyJson(json): Attack {
    const name = json.Title;
    const usage = json.Usage;
    const skill = json.Skill;
    const damageType = new DamageType(
      LegacyJsonDamageTypeMapping.fromJson(json.DamageType)
    );
    const damageDice = json.DamageDice;
    const damageModifier = json.DamageModifier;
    const damageMultiplier =
      json.DamageMultiplier === 0 ? 1 : json.DamageMultiplier;
    const armorDivisor = json.ArmorDivisor === 0 ? 1 : json.ArmorDivisor;
    const maxRange = json.MaxRange;
    const halfDamageRange = json.HalfDamage;
    const shots = json.Shots === '' ? 0 : parseInt(json.Shots, 10);
    const bulk = json.Bulk === '' ? 0 : parseInt(json.Bulk, 10);
    const accuracy = json.Accuracy;
    const splittedAccuracy = json.Accuracy.split('+');
    const accuracyBase = json.Accuracy === '' ? 0 : parseInt(splittedAccuracy[0], 10);
    const accuracyScope = splittedAccuracy.length === 1 ? 0 : parseInt(splittedAccuracy[1], 10);
    const rateOfFire = json.RateOfFire;
    const recoil = json.Recoil;

    return new RangedAttack({
      name,
      usage,
      skill,
      damageType,
      damageDice,
      damageModifier,
      damageMultiplier,
      armorDivisor,
      maxRange,
      halfDamageRange,
      shots,
      bulk,
      accuracy,
      accuracyBase,
      accuracyScope,
      rateOfFire,
      recoil,
    });
  }
}
