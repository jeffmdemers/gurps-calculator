export interface IStatus {
  HP: StatusIncrement;
  FP: StatusIncrement;
}

export interface IStatusLevel {
  name: string;
  description: string;
  threshold: number;
}

export interface IStatusIncrement {
  Max: number;
  Current: number;
}

export class StatusIncrement implements IStatusIncrement {
  Max: number;
  Current: number;
  Levels: IStatusLevel[];

  constructor(max: number, current: number, levels: IStatusLevel[]) {
    this.Max = max;
    this.Current = current || max;
    this.Levels = levels;
  }

  static getFpStatusLevels(FpMax) {
    return [
      <IStatusLevel>{
        name: 'Tired',
        threshold: FpMax / 3,
        description: '1/2 move, dodge, and ST'
      },
      <IStatusLevel>{
        name: 'Collapse',
        threshold: 0,
        description: 'WL each turn or fall unconcious.'
      },
      <IStatusLevel>{
        name: 'Unconcious',
        threshold: -FpMax,
        description: 'Recover FP as though resting.'
      }
    ];
  }

  static getHpStatusLevels(HpMax) {
    return [
      <IStatusLevel>{
        name: 'Reeling',
        threshold: HpMax / 3,
        description: '1/2 move and dodge'
      },
      <IStatusLevel>{
        name: 'Collapse',
        threshold: 0,
        description: 'HT each turn or fall unconcious'
      },
      <IStatusLevel>{
        name: 'Death Check 1',
        threshold: -HpMax,
        description: 'Immediate Health roll or die'
      },
      <IStatusLevel>{
        name: 'Death Check 2',
        threshold: -HpMax * 2,
        description: 'Immediate Health roll or die'
      },
      <IStatusLevel>{
        name: 'Death Check 3',
        threshold: -HpMax * 3,
        description: 'Immediate Health roll or die'
      },
      <IStatusLevel>{
        name: 'Death Check 4',
        threshold: -HpMax * 4,
        description: 'Immediate Health roll or die'
      },
      <IStatusLevel>{
        name: 'Death',
        threshold: -HpMax * 5,
        description: 'Death and Total Bodily Destruction'
      }
    ];
  }

  getStatusLevel(): IStatusLevel {
      return this.Levels.filter(x => this.Current <= x.threshold).pop();
  }
}

export class Status implements IStatus {
  HP: StatusIncrement;
  FP: StatusIncrement;
  constructor(HP: StatusIncrement, FP: StatusIncrement) {
    this.HP = HP;
    this.FP = FP;
  }
}
