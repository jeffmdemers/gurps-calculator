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
import { CharactersComponent } from './components/character/characters/characters.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'collisions', component: CollisionsComponent },
  { path: 'dice-roller', component: DiceRollerComponent },
  { path: 'jumping', component: JumpingComponent },
  { path: 'throwing', component: ThrowingComponent },
  {
    path: 'characters',
    component: CharactersComponent,
    children: [
      {
        path: '',
        component: CharacterListComponent,
        resolve: { characters: MyCharactersResolver }
     },
      {
        path: ':id',
        component: CharacterDisplayComponent,
        resolve: { character: CharacterResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
