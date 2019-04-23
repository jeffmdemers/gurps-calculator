import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Skill } from '../../../../shared/models/character.model';

@Component({
  selector: 'app-character-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() skills: Skill[];
  filteredSkills: Skill[];

  constructor() { }

  ngOnInit() {
    this.filteredSkills = [...this.skills];
  }

  filter(event) {
    const query = event.currentTarget.value.toLowerCase();
    if (query.trim().length === 0) {
      this.filteredSkills = [...this.skills];
    } else {
      this.filteredSkills = this.skills.filter(s => s.name.toLowerCase().indexOf(query) > -1);
    }
  }

}
