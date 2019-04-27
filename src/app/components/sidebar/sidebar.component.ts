import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthorizeService } from 'src/app/services/authorize.service';
import { Router } from '@angular/router';

enum MenuItemType {
  RouterLink,
  ExternalLink,
  Command
}

class MenuItem {
  text: string;
  icon: string;
  link?: string;
  routerLink?: string;
  command?: Function;
  type: MenuItemType;
  isVisible: Function = () => true;

  constructor(text: string, icon, menuItemType: MenuItemType) {
    this.text = text;
    this.icon = icon;
    this.type = menuItemType;
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

  get menuItemType() {
    return MenuItemType;
  }

  constructor(private authService: AuthorizeService, private router: Router) { }

  ngOnInit() {
    this.loadMenuItems();
  }

  itemSelected() {
    this.itemClicked.emit();
  }

  loadMenuItems() {
    const home = new MenuItem('Home', 'home', MenuItemType.RouterLink);
    home.routerLink = '/';

    const settings = new MenuItem(
      'Settings',
      'settings',
      MenuItemType.RouterLink
    );
    settings.routerLink = '/';

    const account = new MenuItem(
      'Account',
      'account_circle',
      MenuItemType.RouterLink
    );
    account.routerLink = '/';

    const characters = new MenuItem(
      'My Characters',
      'people',
      MenuItemType.RouterLink
    );
    characters.routerLink = '/characters';

    // const bugReport = new MenuItem(
    //   'Submit a Bug',
    //   'bug_report',
    //   MenuItemType.ExternalLink
    // );
    // bugReport.link = 'https://github.com/jeffmdemers/gurps-calculator/issues';

    const donate = new MenuItem(
      'Donate',
      'attach_money',
      MenuItemType.ExternalLink
    );
    donate.link = 'https://www.paypal.me/codebyclockwork/5';

    const logout = new MenuItem('Logout', 'exit_to_app', MenuItemType.Command);
    logout.command = () => {
      this.authService.deauthorized();
      this.router.navigate(['login']);
    };

    const login = new MenuItem('Login', 'lock_open', MenuItemType.RouterLink);
    login.routerLink = '/login';

    // auth only
    home.isVisible = () => this.authService.isAuthorized();
    characters.isVisible = () => this.authService.isAuthorized();
    settings.isVisible = () => this.authService.isAuthorized();
    account.isVisible = () => this.authService.isAuthorized();
    logout.isVisible = () => this.authService.isAuthorized();
    login.isVisible = () => !this.authService.isAuthorized();

    const homeGroup = [characters, login];
    const settingsGroup = [settings, account, logout];
    const miscGroup = [donate];

    this.menuGroups = [
      new MenuGroup('', homeGroup),
      new MenuGroup('', settingsGroup),
      new MenuGroup('', miscGroup)
    ];
  }
}
