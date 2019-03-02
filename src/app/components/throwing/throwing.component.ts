import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ThrowingModel } from 'src/app/shared/models/throwing.model';

@Component({
  selector: 'app-throwing',
  templateUrl: './throwing.component.html',
  styleUrls: ['./throwing.component.scss']
})
export class ThrowingComponent implements OnInit {
  throwingForm: FormGroup;
  result: ThrowingModel;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.throwingForm = this.formBuilder.group({
      liftingStrength: [10],
      itemWeight: [0],
      extraEffort: [0],
    });
  }

  get f() { return this.throwingForm.controls; }

  onSubmit() {
    this.result = new ThrowingModel();
    this.result.calculate(
      this.f.liftingStrength.value,
      this.f.itemWeight.value,
      this.f.extraEffort.value
    );
  }

}
