import { DamageType } from './damage.model';
import { DiceRoll } from './dice-roll.model';
import { HitLocation } from './attack/hit-location.model';
import { InjuryTolerance } from './attack/injury-tolerance.model';
import { Posture, StandingPosture } from './attack/posture.model';

export interface Attack {
  readonly name: string;
  readonly usage: string;
  readonly skill: number;
  readonly damageType: DamageType;
  readonly damageDice: number;
  readonly damageModifier: number;
  readonly damageMultiplier: number;
  readonly armorDivisor: number;
  readonly damageDescription: string;

  execute(options: AttackOptions, target: Target): AttackResult;
  // TODO add support for damage modifiers (explosive etc) later
}

abstract class AbstractAttack implements Attack {
  name: string;
  usage: string;
  skill: number;
  damageType: DamageType;
  damageDice: number;
  damageModifier = 0;
  damageMultiplier = 1;
  armorDivisor = 1;
  protected readonly dice: DiceRoll;

  constructor({
    name,
    usage,
    skill,
    damageType,
    damageDice,
    damageModifier = 0,
    damageMultiplier = 1,
    armorDivisor = 1,
  }: {
    name: string;
    usage: string;
    skill: number;
    damageType: DamageType;
    damageDice: number;
    damageModifier?: number;
    damageMultiplier?: number;
    armorDivisor?: number;
  }) {
    this.name = name;
    this.usage = usage;
    this.skill = skill;
    this.damageType = damageType;
    this.damageDice = damageDice;
    this.damageModifier = damageModifier;
    this.damageMultiplier = damageMultiplier;
    this.armorDivisor = armorDivisor;

    this.dice = new DiceRoll();
  }

  get damageDescription(): string {
    return `${this.damageDice}d${
      this.damageModifier > 0
        ? `+${this.damageModifier}`
        : this.damageModifier < 0
        ? `${this.damageModifier}`
        : ''
    } ${this.damageType.name}`;
  }

  execute(options: AttackOptions, target: Target): AttackResult {
    const hitRoll = this.dice.rollDice(
      3,
      this.totalToHitMods(options, target),
      1,
      this.skill
    );

    if (hitRoll.marginOfSuccess < 0) {
      return new AttackResult({
        attackRoll: hitRoll.result,
        marginOfSuccess: hitRoll.marginOfSuccess,
        attackDieRolls: hitRoll.dieResults,
      });
    }

    const damageRoll = this.dice.rollDice(
      this.damageDice,
      this.damageModifier + options.damageMod,
      this.damageMultiplier
    );
    const penetratingDamage = damageRoll.result - target.dr / this.armorDivisor;
    const injury =
      penetratingDamage *
      this.damageType.woundModifier(
        options.hitLocation,
        target.injuryTolerance
      );

    return new AttackResult({
      attackRoll: hitRoll.result,
      marginOfSuccess: hitRoll.marginOfSuccess,
      attackDieRolls: hitRoll.dieResults,
      damageDieRolls: damageRoll.dieResults,
      totalDamageRolled: damageRoll.result,
      penetratingDamage,
      injury,
    });
  }

  protected abstract totalToHitMods(
    options: AttackOptions,
    target: Target
  ): number;
}

export class MeleeAttack extends AbstractAttack {
  readonly reach: string;
  readonly block: string;
  readonly parry: string;

  constructor({
    name,
    usage,
    skill,
    damageType,
    damageDice,
    damageModifier = 0,
    damageMultiplier = 1,
    armorDivisor = 1,
    reach,
    block,
    parry,
  }: {
    name: string;
    usage: string;
    skill: number;
    damageType: DamageType;
    damageDice: number;
    damageModifier?: number;
    damageMultiplier?: number;
    armorDivisor?: number;
    reach: string;
    block: string;
    parry: string;
  }) {
    super({
      name,
      usage,
      skill,
      damageType,
      damageDice,
      damageModifier,
      damageMultiplier,
      armorDivisor,
    });
    this.reach = reach;
    this.block = block;
    this.parry = parry;
  }

  protected totalToHitMods(options: AttackOptions, target: Target): number {
    return (
      options.skillMod +
      options.posture.meleeAttackPenalty +
      options.hitLocation.attackModifier
    );
  }
}

export class RangedAttack extends AbstractAttack {
  readonly maxRange: number;
  readonly halfDamageRange: number;
  readonly shots: number;
  readonly bulk: number;
  readonly accuracy: string;
  readonly accuracyBase: number;
  readonly accuracyScope: number;
  readonly rateOfFire: number;
  readonly recoil: number;

  constructor({
    name,
    usage,
    skill,
    damageType,
    damageDice,
    damageModifier = 0,
    damageMultiplier = 1,
    armorDivisor = 1,
    maxRange,
    halfDamageRange,
    shots,
    bulk,
    accuracy,
    accuracyBase,
    accuracyScope,
    rateOfFire,
    recoil,
  }: {
    name: string;
    usage: string;
    skill: number;
    damageType: DamageType;
    damageDice: number;
    damageModifier?: number;
    damageMultiplier?: number;
    armorDivisor?: number;
    maxRange: number;
    halfDamageRange: number;
    shots: number;
    bulk: number;
    accuracy: string;
    accuracyBase: number;
    accuracyScope: number;
    rateOfFire: number;
    recoil: number;
  }) {
    super({
      name,
      usage,
      skill,
      damageType,
      damageDice,
      damageModifier,
      damageMultiplier,
      armorDivisor,
    });
    this.maxRange = maxRange;
    this.halfDamageRange = halfDamageRange;
    this.shots = shots;
    this.bulk = bulk;
    this.accuracy = accuracy;
    this.accuracyBase = accuracyBase;
    this.accuracyScope = accuracyScope;
    this.rateOfFire = rateOfFire;
    this.recoil = recoil;
  }

  protected totalToHitMods(options: AttackOptions, target: Target): number {
    return (
      options.skillMod +
      options.hitLocation.attackModifier +
      target.posture.penaltyToTargetWithRangedAttack(options.hitLocation)
    );
  }
}

export class Target {
  dr = 0;
  posture: Posture;
  injuryTolerance: InjuryTolerance;

  constructor() {
    this.posture = new StandingPosture();
    this.injuryTolerance = new InjuryTolerance(InjuryTolerance.NONE);
  }
}

export class AttackOptions {
  skillMod = 0;
  damageMod = 0;
  posture: Posture;
  hitLocation: HitLocation;

  constructor() {
    this.posture = new StandingPosture();
    this.hitLocation = new HitLocation(HitLocation.TORSO);
  }
}

export class AttackResult {
  readonly attackRoll: number;
  readonly marginOfSuccess: number;
  readonly attackDieRolls: number[];
  readonly damageDieRolls: number[];
  readonly totalDamageRolled: number;
  readonly penetratingDamage: number;
  readonly injury: number;

  constructor({
    attackRoll,
    marginOfSuccess,
    attackDieRolls,
    damageDieRolls = [],
    totalDamageRolled = 0,
    penetratingDamage = 0,
    injury = 0,
  }: {
    attackRoll: number;
    marginOfSuccess: number;
    attackDieRolls: number[];
    damageDieRolls?: number[];
    totalDamageRolled?: number;
    penetratingDamage?: number;
    injury?: number;
  }) {
    this.attackRoll = attackRoll;
    this.marginOfSuccess = marginOfSuccess;
    this.attackDieRolls = attackDieRolls;
    this.damageDieRolls = damageDieRolls;
    this.totalDamageRolled = totalDamageRolled;
    this.penetratingDamage = penetratingDamage;
    this.injury = injury;
  }
}
