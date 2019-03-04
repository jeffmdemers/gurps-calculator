import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import { SkillItem } from './skills/skills.component';

@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.scss']
})
export class CharacterDisplayComponent implements OnInit {
  character: any;

  constructor(private route: ActivatedRoute, private characterService: CharacterService) { }

  ngOnInit() {
    const c = this.route.snapshot.data.character;
    c.Skills = c.Skills.map(s => {
      const skill: SkillItem = {
        name: s.Description,
        level: s.SkillLevel,
        relativeLevel: s.RelativeSkillLevel,
        pointsSpent: s.Points,
        referencePage: s.Ref
      };

      const noteIndex = skill.name.indexOf('<div');
      if (noteIndex > -1) {
        skill.note = skill.name.substr(noteIndex);
        skill.name = skill.name.substr(0, noteIndex);
      }
      return skill;
    });
    this.character = c;
  }

}
