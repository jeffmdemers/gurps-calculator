import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Skill } from '../../../../shared/models/character.model';

@Component({
  selector: 'app-character-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() skills: Skill[];
  constructor() { }

  ngOnInit() {
  }

}
