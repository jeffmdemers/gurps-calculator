import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CollisionsComponent } from './components/collisions/collisions.component';
import { DiceRollerComponent } from './components/dice-roller/dice-roller.component';
import { JumpingComponent } from './components/jumping/jumping.component';
import { ThrowingComponent } from './components/throwing/throwing.component';
import { CharacterListComponent } from './components/character/character-list/character-list.component';
import { CharacterDisplayComponent } from './components/character/character-display/character-display.component';
import { CharacterResolver, MyCharactersResolver } from './resolvers/character.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'characters',
    component: CharacterListComponent,
    resolve: { characters: MyCharactersResolver },
  },
  {
    path: 'characters/:id',
    component: CharacterDisplayComponent,
    resolve: { character: CharacterResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
