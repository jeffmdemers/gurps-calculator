import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
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
export class RodeoComponent implements OnInit {
  @Input() items: RodeoItem[];
  @Input() selectedItem: string;
  @Output() selectedItemChange: EventEmitter<string> = new EventEmitter();
  @ViewChild('rodeoSelect') select: MatSelect;

  ngOnInit(): void {
  }

  constructor() { }

  selectionChange() {
    this.selectedItemChange.emit(this.selectedItem);
  }

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
    this.selectedItemChange.emit(this.selectedItem);
  }

}
