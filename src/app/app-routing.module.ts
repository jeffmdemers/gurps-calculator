import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharacterListComponent } from './components/character/character-list/character-list.component';
import { CharacterDisplayComponent } from './components/character/character-display/character-display.component';
import { CharacterResolver, MyCharactersResolver } from './resolvers/character.resolver';
import { LoginComponent } from './components/login/login.component';
import { AuthorizedGuard } from './guards/authorized.guard';
import { UnauthorizedGuard } from './guards/unauthorized.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnauthorizedGuard]
  },
  {
    path: 'characters',
    component: CharacterListComponent,
    resolve: { characters: MyCharactersResolver },
    canActivate: [AuthorizedGuard]
  },
  {
    path: 'characters/:id',
    component: CharacterDisplayComponent,
    resolve: { character: CharacterResolver },
    canActivate: [AuthorizedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
