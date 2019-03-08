import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.scss']
})
export class IncrementerComponent implements OnInit {

  @Output() valueChange = new EventEmitter<number>();
  @Input() placeholder: string;
  @Input() min: number;
  @Input() max: number;
  @Input() required: boolean;
  @Input() prepend = '';
  @Input() append = '';
  @Input() displayMax: boolean;
  @Input() value: number;

  displayValue: string;

  ngOnInit(): void {
    this.format();
  }

  format() {
    this.displayValue = this.prepend + this.value + this.append;
    if (this.displayMax) {
      this.displayValue += ` / ${this.max}`;
    }
  }

  increment(value: number) {
    const v = +this.value + value;

    // validate
    if (this.underMin(v)) {
      return;
    }

    if (this.overMax(v)) {
      return;
    }

    this.value = v;
    this.valueChange.emit(this.value);
    this.format();
  }

  underMin(v: number) {
    return this.min !== undefined && v < this.min;
  }

  overMax(v: number) {
    return this.max !== undefined && v > this.max;
  }
}
