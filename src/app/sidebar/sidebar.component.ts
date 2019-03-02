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
    const home = [
      new MenuItem('Home', '/', 'home'),
      new MenuItem('Settings', '/', 'settings'),
      new MenuItem('Account', '/', 'account_circle'),
      new MenuItem('Submit a Bug', '/', 'bug_report'),
      new MenuItem('Donate', '/', 'attach_money'),
      new MenuItem('Logout', '/', 'exit_to_app')
    ];

    this.menuGroups = [
      new MenuGroup('', home)
    ];
  }


}
