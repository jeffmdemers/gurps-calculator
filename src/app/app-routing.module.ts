import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';

const routes: Routes = [
  { path: 'dice-roller', component: DiceRollerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
