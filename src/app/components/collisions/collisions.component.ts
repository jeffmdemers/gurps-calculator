import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CollisionModel, CollisionModelResult} from 'src/app/shared/models/collision.model';

@Component({
  selector: 'app-collisions',
  templateUrl: './collisions.component.html',
  styleUrls: ['./collisions.component.scss'],
})
export class CollisionsComponent implements OnInit {
  collisionForm: FormGroup;
  result: CollisionModelResult;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.collisionForm = this.formBuilder.group({
      hp: [10],
      velocity: [1],
      isHardObject: false,
    });
  }

  get f() {
    return this.collisionForm.controls;
  }

  onSubmit() {
    this.result = new CollisionModelResult;
    this.result = CollisionModel.calculate(
      this.f.hp.value,
      this.f.velocity.value,
      this.f.isHardObject.value);
    this.result.hitLocation = "Torso";
  }
}
