import { Component, OnInit, Input } from '@angular/core';
import { Attributes } from 'src/app/shared/models/character.model';
import { Damage } from 'src/app/shared/models/damage.model';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {

  @Input() attributes: Attributes;
  constructor() { }

  ngOnInit() {
  }


  rollDamage(formula: string) {
    return new Damage().RollDamage(formula);
  }

}
