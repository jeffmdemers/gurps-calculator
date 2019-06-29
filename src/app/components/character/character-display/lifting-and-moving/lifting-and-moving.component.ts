import { Component, Input, OnInit } from '@angular/core';
import { LiftingAndMovingItem } from 'src/app/shared/models/character.model';

@Component({
  selector: 'app-lifting-and-moving',
  templateUrl: './lifting-and-moving.component.html',
  styleUrls: ['./lifting-and-moving.component.scss']
})
export class LiftingAndMovingComponent implements OnInit {
  @Input()
  liftingandMovingItems: LiftingAndMovingItem[];

  constructor() { }

  ngOnInit() {
  }

}
