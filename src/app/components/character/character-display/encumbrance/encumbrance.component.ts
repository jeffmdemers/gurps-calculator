import { Component, Input, OnInit } from '@angular/core';
import { Encumbrance } from 'src/app/shared/models/character.model';

@Component({
  selector: 'app-encumbrance',
  templateUrl: './encumbrance.component.html',
  styleUrls: ['./encumbrance.component.scss'],
})
export class EncumbranceComponent implements OnInit {
  @Input() encumbranceLevels: Encumbrance[];
  constructor() {}

  ngOnInit() {}
}
