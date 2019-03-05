import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import { Skill, Character, Trait } from 'src/app/shared/models/character.model';

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

    this.character.traits = c.AdvantagesAndDisadvantages.map(t => {
      const trait: Trait = {
        name: t.DescriptionPrimary,
        pointsSpent: t.Points,
        referencePage: t.Ref,
        modifierDescription: t.DescriptionModifierNotes
      };

      return trait;
    });
  }

}
