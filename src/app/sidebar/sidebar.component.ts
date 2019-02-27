import { Component, OnInit, Output, EventEmitter } from '@angular/core';

class MenuItem {
  text: string;
  link: string;
  icon: string;

  constructor(text: string, link: string, icon: string) {
    this.text = text;
    this.link = link;
    this.icon = icon;
  }
}

class MenuGroup {
  header: string;
  menuItems: MenuItem[];

  constructor(header: string, menuItems: MenuItem[]) {
    this.header = header;
    this.menuItems = menuItems;
  }
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuGroups: MenuGroup[];
  @Output() itemClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.loadMenuItems();
  }

  itemSelected() {
    this.itemClicked.emit();
  }

  loadMenuItems() {
    const utility_menuItems = [
      new MenuItem('Dice Roller', '/dice-roller', 'casino'),
      new MenuItem('Jumping', '/jumping', 'directions_run'),
      new MenuItem('Throwing', '/throwing', 'gps_not_fixed')
    ];

    this.menuGroups = [
      new MenuGroup('', [new MenuItem('Home', '/', 'home')]),
      new MenuGroup('Utilities', utility_menuItems)
    ];
  }


}
