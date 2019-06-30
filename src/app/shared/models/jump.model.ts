import { Length, LengthType } from './length.model';

export class JumpingModel {
  BroadJump: Length;
  HighJump: Length;
  AirSpeed: Length;

  calculate(
    basicMove: number,
    jumpingSkill?: number,
    yardsRun?: number,
    enhancedMove?: number,
    superJump?: number
  ) {
    const results = new JumpingModel();

    let rawBroad = 2 * basicMove - 3; // used to check doubling for max distance
    let rawHigh = 6 * basicMove - 10; // used to check double for max height
    const yardsRunAdded = enhancedMove > 0;

    // todo: metric conversions

    // use higher of jumpingSkill / 2 and basic move
    if (jumpingSkill > 0 && jumpingSkill / 2 > basicMove) {
      basicMove = jumpingSkill / 2;
    }

    if (enhancedMove > 0) {
      // split enhanced move into two ints, one before and one after decimal. This is because each part needs a different power
      const parts = enhancedMove.toString().split('.');
      const fullRanks = +parts[0];
      const halfRank = +parts[1];

      let finalEnhancedMultiple = 0;

      // only count a half rank if they actually put in a five. discard any other number
      if (halfRank === 5) {
        // x1.5 for each half rank (Can only have 1 half rank)
        finalEnhancedMultiple = 1.5;
      }

      if (fullRanks > 0) {
        // x2 for each full rank
        finalEnhancedMultiple += Math.pow(2, fullRanks);
      }

      basicMove = finalEnhancedMultiple * basicMove;
    } else {
      basicMove += yardsRun;
    }

    // calculate broad and high jumps
    let broadJump = 2 * basicMove - 3;
    let highJump = 6 * basicMove - 10;
    let airSpeed = basicMove;

    // Are there super jump levels?
    if (superJump > 0) {
      // Height and distance doubled
      broadJump = this.performSuperJump(broadJump, superJump);
      highJump = this.performSuperJump(highJump, superJump);
      rawBroad = this.performSuperJump(rawBroad, superJump);
      rawHigh = this.performSuperJump(rawHigh, superJump);

      // Air Speed is *normal* basic move (no enhanced move) plus 1/5 broad jump
      airSpeed = basicMove > broadJump / 5 ? basicMove : broadJump / 5;
    }

    if (broadJump <= 0) {
      airSpeed = 0;
    }

    // max running broad jump is capped at twice broad jump less any yards run
    if (yardsRunAdded && rawBroad * 2 < broadJump) {
      broadJump = rawBroad * 2;
    }

    // max running high jump is capped at twice broad jump less any yards run
    if (yardsRunAdded && rawHigh * 2 < highJump) {
      highJump = rawHigh * 2;
    }

    // convert to yards
    broadJump = +(broadJump / 3).toFixed(2);

    results.AirSpeed = {
      value: airSpeed,
      type: LengthType.yards,
      descriptor: 'yd/s',
    };
    results.BroadJump = {
      value: broadJump,
      type: LengthType.yards,
      descriptor: 'yards',
    };
    results.HighJump = {
      value: highJump,
      type: LengthType.inches,
      descriptor: 'inches',
    };

    return results;
  }

  private performSuperJump(jump: number, superJump: number) {
    jump *= Math.pow(2, superJump);
    return jump;
  }
}
