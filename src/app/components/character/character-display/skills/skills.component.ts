import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { DiceRoll } from '../../../../shared/models/dice-roll.model';
import { Skill } from '../../../../shared/models/character.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() skills: Skill[];
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  roll(skill: Skill) {
    skill.result = new DiceRoll().rollDice(3, 0, 0, skill.level);
  }

}
