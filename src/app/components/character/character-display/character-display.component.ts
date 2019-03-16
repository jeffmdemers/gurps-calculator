import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import { Skill, Character, Trait, Identity } from 'src/app/shared/models/character.model';
import { Status, StatusIncrement } from 'src/app/shared/models/status.model';
import { RodeoItem } from '../../shared/rodeo/rodeo.component';

@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.scss']
})
export class CharacterDisplayComponent implements OnInit {
  character: Character = new Character();
  screenSelected = 'skills';
  screenSelections: RodeoItem[];

  constructor(private route: ActivatedRoute, private characterService: CharacterService) { }

  ngOnInit() {
    this.getScreenSelections();

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
    .sort((a, b) => b.Points - a.Points)
    .map(t => {
      const trait: Trait = {
        name: t.DescriptionPrimary,
        pointsSpent: t.Points,
        referencePage: t.Ref,
        modifierDescription: t.DescriptionModifierNotes
      };

      return trait;
    });

    this.character.identity = <Identity> {
      name: c.Identity.Name,
      title: c.Identity.Title,
      religion: c.Identity.Religion
    };

    const fpStatusInc = new StatusIncrement(c.FpAndHp.FP, c.FpAndHp.CurrentFp, StatusIncrement.getFpStatusLevels(c.FpAndHp.FP));
    const hpStatusInc = new StatusIncrement(c.FpAndHp.HP, c.FpAndHp.CurrentHp, StatusIncrement.getHpStatusLevels(c.FpAndHp.HP));
    this.character.status = new Status(hpStatusInc, fpStatusInc);
  }

  getScreenSelections() {
    this.screenSelections = [
     // new RodeoItem('skills', 'Skills'),
     // new RodeoItem('traits', 'Traits'),
    ];
  }

}
