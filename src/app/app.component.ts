import { Component, OnInit } from '@angular/core';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gurps-calculator';
  showMenuIcon: boolean;

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
  }

  btnMenuClicked() {
    this.menuService.emitToggleEvent(null);
  }
}
