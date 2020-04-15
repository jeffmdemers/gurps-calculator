import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gurps-calculator';
  showMenuIcon: boolean;

  constructor(
    public menuService: MenuService
  ) {}

  btnMenuClicked() {
    this.menuService.emitToggleEvent(null);
  }
}
