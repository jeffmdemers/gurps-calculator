import { Component, Input, OnInit } from '@angular/core';
import {
  Attributes,
  Encumbrance,
  LiftingAndMovingItem,
} from 'src/app/shared/models/character.model';

@Component({
  selector: 'app-character-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() attributes: Attributes;
  @Input() encumbranceLevels: Encumbrance[];
  @Input() liftingandMovingItems: LiftingAndMovingItem[];

  constructor() {}

  ngOnInit() {}
}
