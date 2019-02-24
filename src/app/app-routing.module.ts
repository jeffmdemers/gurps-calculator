import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';
import { JumpingComponent } from './jumping/jumping.component';

const routes: Routes = [
  { path: '', component: DiceRollerComponent},
  { path: 'dice-roller', component: DiceRollerComponent},
  { path: 'jumping', component: JumpingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
