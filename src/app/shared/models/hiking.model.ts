import { DiceRoll } from './dice-roll.model';

export class HikingModelResult {
  // this is here because I wanted to have an intermediary to gather more data for user display, didn't get to it first round
  Result: number;
  TimeSpan: Object;
  RationsUsed: number;
  HikingAttempts: Array<number>;

  constructor(Result, TimeSpan, RationsUsed) {
    this.Result = Result;
    this.TimeSpan = TimeSpan;
    this.RationsUsed = RationsUsed;
  }
}

export class HikingModel {
  RuleSet: RulesMode;
  TerrainQuality: TerrainQuality;
  Weather: HikingWeather;
  OffRoad: boolean;
  RoadQuality: RoadQuality;
  Leadership: boolean;
  Hikers: Array<Hiker>;
  Mode: HikingCalculatorMode;
  Goal: number;

  constructor(RuleSet, TerrainQuality, Weather, OffRoad, RoadQuality, Leadership, Hikers, Mode, Goal, ) {
    this.RuleSet = RuleSet;
    this.TerrainQuality = TerrainQuality;
    this.Weather = Weather;
    this.OffRoad = OffRoad;
    this.RoadQuality = RoadQuality;
    this.Leadership = Leadership;
    this.Hikers = Hikers;
    this.Mode = Mode;
    this.Goal = Goal;
  }

  HikingAttemptResults: Array<number>;

  Calculate() {
    switch (this.RuleSet) {
      case RulesMode.BasicSet:
        return this.CalculateBasicSet();
      case RulesMode.HighTech:
        return this.CalculateHighTech();
      case RulesMode.WildernessAdventures:
        return this.CalculateWildernessAdventures();
      default:
        alert('Not Implemented Yet')
        throw Error('Not Implemented Yet');
    }
  }
  // hiking system logic, prepare for ocular assualt
  private CalculateBasicSet() {
    if (!this.OffRoad && this.Weather !== HikingWeather.Rain) {
      // road quality replaces terrain quality
      switch (this.RoadQuality) {
        // road quality modifiers
        case RoadQuality.Bad:
          break;
        case RoadQuality.Average:
          break;
        case RoadQuality.Good:
          this.AccumulateModifiers(1.25); break;
        default:
          throw Error('Option Not Supported')
      }
    } else if (this.OffRoad) {
      // if off road  use normal terrain qualities
      switch (this.TerrainQuality) {
        // terrain quality modifiers
        case TerrainQuality.VeryBad:
          this.AccumulateModifiers(.2); break;
        case TerrainQuality.Bad:
          this.AccumulateModifiers(.5); break;
        case TerrainQuality.Average:
          break;
        case TerrainQuality.Good:
          this.AccumulateModifiers(1.25); break;
        case TerrainQuality.SolidIce:
          // solid ice, like a frozen rive or lake
          this.Hikers.forEach(hiker =>
            hiker.UseIceSkates ? hiker.CumulativeBonus *= 1.25 :
              hiker.CumulativeBonus *= .5); break;
        default:
          throw Error('Option Not Supported')
      }
    }

    switch (this.Weather) {
      // weather quality modifiers
      case HikingWeather.Nominal:
        break;
      case HikingWeather.Rain:
        // if you are off road *.5 else modifiers as for roads
        if (this.OffRoad) {
          this.AccumulateModifiers(.5);
        } else if (!this.OffRoad && this.Weather === HikingWeather.Rain) {
          // if it is raining and you are on a road
          switch (this.RoadQuality) {
            // road quality if it is raining
          case RoadQuality.Bad:
            this.AccumulateModifiers(.2); break;
          case RoadQuality.Average:
            break;
          case RoadQuality.Good:
            break;
          default:
            throw Error ('Option Not Supported');
          }
          break;
        }
      case HikingWeather.Ice:
        // ice, but not solid ice : incompatible with terrain solid ice
        this.TerrainQuality === TerrainQuality.SolidIce ? undefined : this.AccumulateModifiers(.5); break;
      case HikingWeather.AnkleDeepSnow:
        this.TerrainQuality === TerrainQuality.SolidIce ? undefined :
        // if hiker uses skis *1, else *.5
        this.Hikers.forEach(hiker =>
          hiker.UseSkis ? hiker.CumulativeBonus *= 1 :
            hiker.CumulativeBonus *= .5);
            break;
      case HikingWeather.VeryDeepSnow:
        this.TerrainQuality === TerrainQuality.SolidIce ? undefined :
        // if hiker uses skis *1 else *.25
        this.Hikers.forEach(hiker =>
          hiker.UseSkis ? hiker.CumulativeBonus *= 1 :
            hiker.CumulativeBonus *= .25);
            break;
      default:
        throw Error('Option Not Supported');
    }

    // resolves skill roll bonuses
    if (this.Leadership) {
      //resolve hiking at once
      this.HikingAttempt(this.averageHikingSkill) > 0 ? this.AccumulateModifiers(1.2) : undefined;
    } else {
      //resolve one by one
      this.Hikers.forEach(hiker => this.HikingAttempt(hiker.HikingSkill) > 0 ? hiker.CumulativeBonus *= 1.2 : undefined);
    }

    switch (this.Mode) {
      case HikingCalculatorMode.Time:
        var result: number = this.Goal / this.minimumBasicSetMileage;
        var timeSpan: object = {
          get days(): number { return Math.floor(result) },
          get hours(): number { return Math.floor((result - Math.floor(result)) * 24) },
          get minutes(): number { return Math.round((((result - Math.floor(result)) * 24) - Math.floor((result - Math.floor(result)) * 24)) * 60) }
        }
        return timeSpan;
      case HikingCalculatorMode.Distance:
        return this.Goal * this.minimumBasicSetMileage;
      default:
        alert('Please Select An Option');
        throw Error('Please Select An Option');
    }
  }
  private CalculateHighTech() {
    alert("Not Implemented Yet");
    throw Error('Not Implemented Yet');
  }
  private CalculateWildernessAdventures() {
    alert("Not Implemented Yet");
    throw Error('Not Implemented Yet');
  }

  get averageHikingSkill(): number { return Math.round(this.Hikers.map(hiker => hiker.HikingSkill).reduce((a, b) => a + b, 0) / this.Hikers.length) }
  get minimumBasicSetMileage(): any { return this.Hikers.length != 0 ? this.Hikers.map(hiker => hiker.BasicSetMilesPerDay).reduce((a, b) => Math.min(a, b)) : alert('please add Hikers to the table') }

  private AccumulateModifiers(modifier: number) {
    // loops through the hikers and applies a distance modifier
    this.Hikers.forEach(hiker => hiker.CumulativeBonus *= modifier);
  }
  private HikingAttempt(target): number {
    return new DiceRoll().rollDice(3, 0, 0, target  ).marginOfSuccess
  }
}

export class Hiker {
  Name: string;
  HikingSkill: number;
  BasicMove: number;
  MaximumFatiguePoints: number;
  FatiguePoints: number;
  FatigueRestingRecoveryRate: number;
  FatigueConstantRecoveryRate: number;
  CumulativeBonus: number;
  UseSkis: boolean;
  UseIceSkates: boolean;
  // for implementing the extra effort rules
  ExtraEffort: boolean;
  Will: number;

  constructor(HikingSkill, UseIceSkates, UseSkis, MaximumFatiguePoints, FatiguePoints, FatigueRestingRecoverRate, FatigueConstantRecoveryRate, BasicMove, CumulativeBonus, Name, Will, ExtraEffort) {
    this.HikingSkill = HikingSkill;
    this.UseIceSkates = UseIceSkates;
    this.UseSkis = UseSkis;
    this.MaximumFatiguePoints = MaximumFatiguePoints;
    this.FatiguePoints = FatiguePoints;
    this.FatigueRestingRecoveryRate = FatigueRestingRecoverRate;
    this.FatigueConstantRecoveryRate = FatigueConstantRecoveryRate;
    this.BasicMove = BasicMove;
    this.CumulativeBonus = CumulativeBonus;
    this.Name = Name;
    this.Will = Will;
    this.ExtraEffort = ExtraEffort;
  }

  get BasicSetMilesPerDay(): number { return this.ExtraEffort ? 10 * this.ExtraEffortMove() * this.CumulativeBonus : 10 * this.BasicMove * this.CumulativeBonus }
  get HighTechMilesPerHour(): number { return (this.BasicMove * this.CumulativeBonus) / 2 }

  // multiplies basic move by 5% * MoS and returns modified move
  ExtraEffortMove() {
    var extraEffortAttempt = new DiceRoll().rollDice(3, 0, 0, this.Will).marginOfSuccess;
    if (this.ExtraEffort) {
      if (extraEffortAttempt > 0) {
      return (extraEffortAttempt * .05) * this.BasicMove;
      }
    } else {
      throw new Error('You Cannot Attempt Extra Effort')
    }
  }
}

export enum HikingCalculatorMode {
  Distance,
  Time
}
export enum HikingWeather {
  Nominal,
  Rain,
  AnkleDeepSnow,
  VeryDeepSnow,
  Ice
}
export enum TerrainQuality {
  VeryBad,
  Bad,
  Average,
  Good,
  SolidIce
}
export enum RoadQuality {
  Bad,
  Average,
  Good,
}

export enum RulesMode {
  BasicSet,
  HighTech,
  WildernessAdventures
}
