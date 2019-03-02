import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { JumpingModel } from 'src/app/shared/models/jump.model';


@Component({
  selector: 'app-jumping',
  templateUrl: './jumping.component.html',
  styleUrls: ['./jumping.component.scss']
})

export class JumpingComponent implements OnInit {
  jumpingForm: FormGroup;
  result: JumpingModel;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.jumpingForm = this.formBuilder.group({
      basicMove: [5],
      jumpingSkill: [0],
      yardsRun: [0],
      enhancedMoveLevels: [0],
      superJumpLevels: [0]
    });
  }

  get f() { return this.jumpingForm.controls; }

  onSubmit() {
    this.result = new JumpingModel().calculate(
      this.f.basicMove.value,
      this.f.jumpingSkill.value,
      this.f.yardsRun.value,
      this.f.enhancedMoveLevels.value,
      this.f.superJumpLevels.value,
    );
  }
}
