import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import { Skill, Character, Trait, Identity, StatusIncrement, StatusLevel } from 'src/app/shared/models/character.model';

@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.scss']
})
export class CharacterDisplayComponent implements OnInit {
  character: Character = new Character();

  constructor(private route: ActivatedRoute, private characterService: CharacterService) { }

  ngOnInit() {
    const c = this.route.snapshot.data.character;
    this.character.skills = c.Skills.map(s => {
      const skill: Skill = {
        name: s.DescriptionPrimary,
        level: s.SkillLevel,
        relativeLevel: s.RelativeSkillLevel,
        pointsSpent: s.Points,
        referencePage: s.Ref,
        note: s.DescriptionNotes
      };
      return skill;
    });

    this.character.traits = c.AdvantagesAndDisadvantages
    .sort((a,b) => b.Points - a.Points)
    .map(t => {
      const trait: Trait = {
        name: t.DescriptionPrimary,
        pointsSpent: t.Points,
        referencePage: t.Ref,
        modifierDescription: t.DescriptionModifierNotes
      };

      return trait;
    });
debugger;
    this.character.identity = <Identity> {
      name: c.Identity.Name,
      title: c.Identity.Title,
      religion: c.Identity.Religion,
    };

    this.character.status = <Status> {
      HP: <StatusIncrement> {
        Max: c.FpAndHp.HP,
        Current: c.FpAndHp.CurrentHp,
        Levels: [
          <StatusLevel> {
            name: 'Reeling',
            threshold: c.FpAndHp.Reeling,
            description: '1/2 move and dodge'
          },
          <StatusLevel> {
            name: 'Collapse',
            threshold: c.FpAndHp.HpCollapse,
            description: 'HT each turn or fall unconcious'
          },
          <StatusLevel> {
            name: 'Dead Check 1',
            threshold: c.FpAndHp.DeathCheck1,
            description: 'Immediate Health roll or die'
          },
          <StatusLevel> {
            name: 'Dead Check 2',
            threshold: c.FpAndHp.DeathCheck2,
            description: 'Immediate Health roll or die'
          },
          <StatusLevel> {
            name: 'Dead Check 3',
            threshold: c.FpAndHp.DeathCheck3,
            description: 'Immediate Health roll or die'
          },
          <StatusLevel> {
            name: 'Dead Check 4',
            threshold: c.FpAndHp.DeathCheck4,
            description: 'Immediate Health roll or die'
          },
          <StatusLevel> {
            name: 'Death',
            threshold: c.FpAndHp.Dead,
            description: 'Death and Total Bodily Destruction'
          }
        ]
      } 
    };
  }

}
