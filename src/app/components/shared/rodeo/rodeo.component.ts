import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';

export class RodeoItem {
  text: string;
  value: string;

  constructor(value: string, text: string) {
    this.text = text;
    this.value = value;
  }
}

@Component({
  selector: 'app-rodeo',
  templateUrl: './rodeo.component.html',
  styleUrls: ['./rodeo.component.scss']
})
export class RodeoComponent {

  selected: string;

  @Input()
  get selectedItem(): string { return this.selected; }
  set selectedItem(val: string) {
    this.selected = val;
    this.selectedItemChange.emit(this.selected);
  }

  @Output()
  selectedItemChange = new EventEmitter<string>();

  @Input()
  items: RodeoItem[];

  @ViewChild('rodeoSelect') select: MatSelect;

  rotateRodeo(skip: number) {
    const length = this.items.length;
    let curIndex = this.items.findIndex(x => x.value === this.selectedItem);
    curIndex += skip;
    if (curIndex > length - 1) {
      curIndex = 0;
    } else if (curIndex < 0) {
      curIndex = length - 1;
    }
    this.selectedItem = this.items[curIndex].value;
  }

}
