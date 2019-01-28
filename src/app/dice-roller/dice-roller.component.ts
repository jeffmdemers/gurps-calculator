import { Component, OnInit } from '@angular/core';
import { DiceRoll } from '../shared/models/dice-roll.model';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.scss']
})
export class DiceRollerComponent implements OnInit {
  diceForm: FormGroup;
  results: DiceRoll[];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.diceForm = this.formBuilder.group({
      numberOfDice: [3, Validators.required],
      modifier: [0],
      multiple: [1],
      numberOfRolls: [1],
      target: [10]
    });
  }

  get f() { return this.diceForm.controls; }

  onSubmit() {
    if (this.diceForm.invalid) {
      return;
    }
    this.results = new DiceRoll().rollDiceSet(
      this.f.numberOfDice.value,
      this.f.modifier.value,
      this.f.multiple.value,
      this.f.numberOfRolls.value,
      this.f.target.value
    );
  }
}
