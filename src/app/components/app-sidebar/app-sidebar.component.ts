import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RodeoItem } from '../shared/rodeo/rodeo.component';

@Component({
  selector: 'app-app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss']
})
export class AppSidebarComponent implements OnInit {
  @Output() closeClicked = new EventEmitter();
  appSelected = 'dice-roller';
  appSelections: RodeoItem[];

  ngOnInit() {
    this.getAppSelections();
  }

  closeClick() {
    this.closeClicked.emit(true);
  }

  getAppSelections() {
    this.appSelections = [
      new RodeoItem('dice-roller', 'Dice Roller'),
      new RodeoItem('collisions', 'Collisions'),
      new RodeoItem('jumping', 'Jumping'),
      new RodeoItem('throwing', 'Throwing'),
    ];
  }

}
