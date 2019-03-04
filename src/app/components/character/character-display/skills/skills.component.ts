import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { DiceRoll } from 'src/app/shared/models/dice-roll.model';

export interface SkillItem {
  name: string;
  level: number;
  relativeLevel: string;
  pointsSpent: number;
  referencePage: string;
  note?: string;
  result?: DiceRoll;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() skills: SkillItem[];
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  roll(skill: SkillItem) {
    skill.result = new DiceRoll().rollDice(3, 0, 0, skill.level);
  }

}
