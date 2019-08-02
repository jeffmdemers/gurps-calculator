import { HitLocation } from './hit-location.model';

export interface Posture {
  readonly meleeAttackPenalty: number;
  penaltyToTargetWithRangedAttack(location: HitLocation): number;
}

export class StandingPosture implements Posture {
  get meleeAttackPenalty(): number {
    return 0;
  }

  penaltyToTargetWithRangedAttack(location: HitLocation): number {
    return 0;
  }
}

export class CrouchingPosture implements Posture {
  get meleeAttackPenalty(): number {
    return -2;
  }

  penaltyToTargetWithRangedAttack(location: HitLocation): number {
    switch (location.name) {
      case HitLocation.TORSO:
      case HitLocation.GROIN:
      case HitLocation.LEG:
      case HitLocation.FOOT:
        return -2;
      default:
        return 0;
    }
  }
}

export class KneelingPosture implements Posture {
  get meleeAttackPenalty(): number {
    return -2;
  }

  penaltyToTargetWithRangedAttack(location: HitLocation): number {
    switch (location.name) {
      case HitLocation.TORSO:
      case HitLocation.GROIN:
      case HitLocation.LEG:
      case HitLocation.FOOT:
        return -2;
      default:
        return 0;
    }
  }
}

export class CrawlingPosture implements Posture {
  get meleeAttackPenalty(): number {
    return -4;
  }

  penaltyToTargetWithRangedAttack(location: HitLocation): number {
    switch (location.name) {
      case HitLocation.TORSO:
      case HitLocation.GROIN:
      case HitLocation.LEG:
      case HitLocation.FOOT:
        return -2;
      default:
        return 0;
    }
  }
}

export class SittingPosture implements Posture {
  get meleeAttackPenalty(): number {
    return -2;
  }

  penaltyToTargetWithRangedAttack(location: HitLocation): number {
    switch (location.name) {
      case HitLocation.TORSO:
      case HitLocation.GROIN:
      case HitLocation.LEG:
      case HitLocation.FOOT:
        return -2;
      default:
        return 0;
    }
  }
}

export class LyingDownPosture implements Posture {
  get meleeAttackPenalty(): number {
    return -4;
  }

  penaltyToTargetWithRangedAttack(location: HitLocation): number {
    switch (location.name) {
      case HitLocation.TORSO:
      case HitLocation.GROIN:
      case HitLocation.LEG:
      case HitLocation.FOOT:
        return -2;
      default:
        return 0;
    }
  }
}
