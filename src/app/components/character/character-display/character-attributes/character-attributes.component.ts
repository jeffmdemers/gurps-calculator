import { Component, OnInit, Input } from '@angular/core';
import { Attributes } from 'src/app/shared/models/character.model';
import { Damage } from 'src/app/shared/models/damage.model';

@Component({
  selector: 'app-character-attributes',
  templateUrl: './character-attributes.component.html',
  styleUrls: ['./character-attributes.component.scss']
})
export class CharacterAttributesComponent implements OnInit {

  @Input() attributes: Attributes;
  constructor() { }

  ngOnInit() {
  }


  rollDamage(formula: string) {
    return new Damage().RollDamage(formula);
  }

}
