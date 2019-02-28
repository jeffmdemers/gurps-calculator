import { Component, OnInit } from '@angular/core';
import {  CollisionModelResult, CollisionModel } from '../shared/models/collision.model';

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
    debugger;
  }

  onSubmit(){
    this.result = CollisionModel.calculate(10, 200, true);
  }

}
