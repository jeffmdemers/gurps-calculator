import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule, MatList} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';

import { FlexLayoutModule } from '@angular/flex-layout';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DiceRollerComponent } from './components/dice-roller/dice-roller.component';
import { JumpingComponent } from './components/jumping/jumping.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StandardCardComponent } from './components/standard-card/standard-card.component';
import { IndexSearchComponent } from './components/index-search/index-search.component';
import { ThrowingComponent } from './components/throwing/throwing.component';
import { CollisionsComponent } from './components/collisions/collisions.component';
import { HomeComponent } from './components/home/home.component';
import { AppSidebarComponent } from './components/app-sidebar/app-sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterDisplayComponent } from './components/character/character-display/character-display.component';
import { CharacterListComponent } from './components/character/character-list/character-list.component';
import { SkillsComponent } from './components/character/character-display/skills/skills.component';
import { ResultIconComponent } from './components/shared/result-icon/result-icon.component';
import { TraitsComponent } from './components/character/character-display/traits/traits.component';
import { RodeoComponent } from './components/shared/rodeo/rodeo.component';
import { HeaderComponent } from './components/character/character-display/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DiceRollerComponent,
    JumpingComponent,
    SidebarComponent,
    StandardCardComponent,
    IndexSearchComponent,
    ThrowingComponent,
    CollisionsComponent,
    HomeComponent,
    AppSidebarComponent,
    CharacterDisplayComponent,
    CharacterListComponent,
    SkillsComponent,
    ResultIconComponent,
    TraitsComponent,
    RodeoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatSidenavModule,
    MatBadgeModule,
    MatChipsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
