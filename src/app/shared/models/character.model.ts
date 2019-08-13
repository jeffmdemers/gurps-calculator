import * as _ from 'lodash';
import { Status, StatusIncrement } from './status.model';
import {
  MeleeAttackFactory,
  RangedAttackFactory,
} from './attack/attack-factory.model';

export interface Identity {
  name: string;
  title: string;
  religion: string;
}

export interface MetaInformation {
  id: string;
  player: string;
  campaign: string;
  createdOn: Date;
  notes: string;
}

export interface Attributes {
  basicMove: number;
  basicSpeed: number;
  strength: Strength;
  intelligence: number;
  dexterity: number;
  health: number;
  will: number;
  perception: Perception;
  frightCheck: number;
}

export interface Perception {
  value: number;
  hearing: number;
  tasteSmell: number;
  touch: number;
  vision: number;
}

export interface Strength {
  value: number;
  swing: string;
  thrust: string;
}

interface Meta {
  name: string;
  pointsSpent: number;
  referencePage: string;
}

export interface Trait extends Meta {
  modifierDescription: string;
}

export interface Skill extends Meta {
  level: number;
  relativeLevel: string;
  note: string;
}

export interface Encumbrance {
  dodge: number;
  level: string;
  maxLoad: string;
  move: number;
  isCurrentLevel: boolean;
}

export interface LiftingAndMovingItem {
  label: string;
  value: string;
}

export class Character {
  identity: Identity;
  status: Status;
  attributes: Attributes;
  traits: Trait[];
  skills: Skill[];
  encumbranceLevels: Encumbrance[];
  liftingAndMovingItems: LiftingAndMovingItem[];
  metaInformation: MetaInformation;

  private characterJson: any;

  constructor(characterJson: any) {
    this.characterJson = characterJson;
    this.LoadCharacter();
  }

  LoadCharacter() {
    this.loadSkills();
    this.loadTraits();
    this.loadIdentity();
    this.loadStatus();
    this.loadAttributes();
    this.loadEncumbrance();
    this.loadLiftingAndMoving();
    this.loadAttacks();
    this.loadMetaInformation();
  }

  private loadSkills() {
    this.skills = this.characterJson.Skills.map(s => {
      const skill: Skill = {
        name: s.DescriptionPrimary,
        level: s.SkillLevel,
        relativeLevel: s.RelativeSkillLevel,
        pointsSpent: s.Points,
        referencePage: s.Ref,
        note: s.DescriptionNotes,
      };
      return skill;
    });
  }

  private loadTraits() {
    const traits = this.characterJson.AdvantagesAndDisadvantages.map(t => {
      const trait: Trait = {
        name: t.DescriptionPrimary,
        pointsSpent: t.Points,
        referencePage: t.Ref,
        modifierDescription: t.DescriptionModifierNotes,
      };
      return trait;
    });

    const pos = traits.filter(x => x.pointsSpent > -1);
    const neg = traits.filter(x => x.pointsSpent < 0);

    this.traits = [..._.sortBy(pos, 'name'), ..._.sortBy(neg, 'name')];
  }

  private loadIdentity() {
    this.identity = <Identity>{
      name: this.characterJson.Identity.Name,
      title: this.characterJson.Identity.Title,
      religion: this.characterJson.Identity.Religion,
    };
  }

  private loadStatus() {
    const fpStatusInc = new StatusIncrement(
      this.characterJson.FpAndHp.FP,
      this.characterJson.FpAndHp.CurrentFp,
      StatusIncrement.getFpStatusLevels(this.characterJson.FpAndHp.FP)
    );
    const hpStatusInc = new StatusIncrement(
      this.characterJson.FpAndHp.HP,
      this.characterJson.FpAndHp.CurrentHp,
      StatusIncrement.getHpStatusLevels(this.characterJson.FpAndHp.HP)
    );
    this.status = new Status(hpStatusInc, fpStatusInc);
  }

  private loadAttributes() {
    const c = this.characterJson.Attributes;
    this.attributes = <Attributes>{
      basicMove: c.BasicMove,
      basicSpeed: c.BasicSpeed,
      dexterity: c.Dexterity,
      frightCheck: c.FrightCheck,
      health: c.Health,
      intelligence: c.Intelligence,
      will: c.Will,
      strength: <Strength>{
        value: c.Strength,
        swing: c.Swing,
        thrust: c.Thrust,
      },
      perception: <Perception>{
        value: c.Perception,
        hearing: c.Hearing,
        touch: c.Touch,
        tasteSmell: c.TasteAndSmell,
        vision: c.Vision,
      },
    };
  }

  private loadEncumbrance() {
    const c = this.characterJson.EncumberanceMoveAndDodges;
    this.encumbranceLevels = c.map(e => {
      return <Encumbrance>{
        dodge: +e.Dodge,
        level: e.Level,
        maxLoad: e.MaxLoad,
        move: +e.Move,
        isCurrentLevel: e.isActive,
      };
    });
  }

  private loadLiftingAndMoving() {
    const c = this.characterJson.LiftingAndMovingThings;
    this.liftingAndMovingItems = Object.keys(c).map(
      e =>
        <LiftingAndMovingItem>{
          label: e.replace(/([A-Z])/g, ' $1').trim(),
          value: c[e],
        }
    );
  }

  private loadAttacks() {
    const meleeAttackFactory = new MeleeAttackFactory();
    const meleeAttacks = this.characterJson.MeleeRows.map(row => {
      return meleeAttackFactory.fromLegacyJson(row);
    });

    const rangedAttackFactory = new RangedAttackFactory();
    const rangedAttacks = this.characterJson.RangedRows.map(row => {
      return rangedAttackFactory.fromLegacyJson(row);
    });
  }

  private loadMetaInformation() {
    this.metaInformation = <MetaInformation>{
      id: this.characterJson.id,
      player: '',
      campaign: '',
      createdOn: new Date(),
      notes: this.characterJson.persistentData.notes
    };
  }
}
