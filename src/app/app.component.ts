import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gurps-calculator';

  constructor(private router: Router) {
    this.router.navigate(['dice-roller']);
  }
}
