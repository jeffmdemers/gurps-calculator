import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { MatSelect } from '@angular/material/select';
class SelectItem {
  text: string;
  value: string;

  constructor(value: string, text: string) {
    this.text = text;
    this.value = value;
  }
}
@Component({
  selector: 'app-app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss']
})
export class AppSidebarComponent implements OnInit {
  @Output() closeClicked = new EventEmitter();
  @ViewChild('appselect') select: MatSelect;
  appSelected = 'dice-roller';
  appSelections: SelectItem[];

  constructor() { }
  ngOnInit() {
    this.getAppSelections();
  }

  closeClick() {
    this.closeClicked.emit(true);
  }

  rotateRodeo(skip: number) {
    const length = this.appSelections.length;
    let curIndex = this.appSelections.findIndex(x => x.value === this.appSelected);
    curIndex += skip;
    if (curIndex > length - 1) {
      curIndex = 0;
    } else if (curIndex < 0) {
      curIndex = length - 1;
    }
    this.appSelected = this.appSelections[curIndex].value;
  }

  getAppSelections() {
    this.appSelections = [
      new SelectItem('dice-roller', 'Dice Roller'),
      new SelectItem('collisions', 'Collisions'),
      new SelectItem('jumping', 'Jumping'),
      new SelectItem('throwing', 'Throwing'),
    ];
  }

}
