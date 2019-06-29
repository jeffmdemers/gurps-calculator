import { Component, Input } from "@angular/core";
import { DiceRoll } from "src/app/shared/models/dice-roll.model";

export enum RollerType {
  Default,
  StrengthDamage
}

@Component({
  selector: "app-row-roller",
  templateUrl: "./row-roller.component.html",
  styleUrls: ["./row-roller.component.scss"]
})
export class RowRollerComponent {
  @Input() name: string;
  @Input() notes: string;
  @Input() target: number;
  @Input() readOnly = false;
  @Input() customRoll: Function;

  result: DiceRoll;

  roll() {
    if (this.customRoll) {
      const value = this.customRoll(this.target);
      this.result = <DiceRoll>{
        dieResults: null,
        result: value,
        marginOfSuccess: null,
        absoluteMargin: null,
        success: null
      };
    } else {
      this.rollDefault();
    }
  }

  rollDefault() {
    this.result = new DiceRoll().rollDice(3, 0, 0, this.target);
  }
}
