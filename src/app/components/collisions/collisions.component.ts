import { Component, OnInit } from '@angular/core';
import { CollisionModel, CollisionModelResult } from 'src/app/shared/models/collision.model';


@Component({
  selector: 'app-collisions',
  templateUrl: './collisions.component.html',
  styleUrls: ['./collisions.component.scss']
})
export class CollisionsComponent implements OnInit {

  result: CollisionModelResult;

  constructor() { }

  ngOnInit() {
    this.onSubmit();

  }

  onSubmit() {
    this.result = CollisionModel.calculate(10, 200, true);
  }

}
