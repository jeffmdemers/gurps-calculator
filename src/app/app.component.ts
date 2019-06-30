import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { UserBottomSheetComponent } from './components/user-bottom-sheet/user-bottom-sheet.component';
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
    public menuService: MenuService,
    private bottomSheet: MatBottomSheet
  ) {}

  btnMenuClicked() {
    this.menuService.emitToggleEvent(null);
  }

  openBottomSheet() {
    this.bottomSheet.open(UserBottomSheetComponent);
  }
}
