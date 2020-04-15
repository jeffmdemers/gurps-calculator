import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule, FormArray } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributesComponent } from './components/character/character-display/attributes/attributes.component';
import { CharacterDisplayComponent } from './components/character/character-display/character-display.component';
import { DetailsComponent } from './components/character/character-display/details/details.component';
import { EncumbranceComponent } from './components/character/character-display/encumbrance/encumbrance.component';
import { HeaderComponent } from './components/character/character-display/header/header.component';
import { LiftingAndMovingComponent } from './components/character/character-display/lifting-and-moving/lifting-and-moving.component';
import { SkillsComponent } from './components/character/character-display/skills/skills.component';
import { TraitsComponent } from './components/character/character-display/traits/traits.component';
import { CharacterListComponent } from './components/character/character-list/character-list.component';
import { CollisionsComponent } from './components/collisions/collisions.component';
import { DiceRollerComponent } from './components/dice-roller/dice-roller.component';
import { HomeComponent } from './components/home/home.component';
import { IndexSearchComponent } from './components/index-search/index-search.component';
import { JumpingComponent } from './components/jumping/jumping.component';
import { LoginComponent } from './components/login/login.component';
import { IncrementerComponent } from './components/shared/incrementer/incrementer.component';
import { ResultIconComponent } from './components/shared/result-icon/result-icon.component';
import { RowRollerComponent } from './components/shared/row-roller/row-roller.component';
import { StandardCardComponent } from './components/standard-card/standard-card.component';
import { ThrowingComponent } from './components/throwing/throwing.component';
import { HikingComponent } from './components/hiking/hiking.component';

@NgModule({
  declarations: [
    AppComponent,
    DiceRollerComponent,
    JumpingComponent,
    StandardCardComponent,
    IndexSearchComponent,
    ThrowingComponent,
    CollisionsComponent,
    HomeComponent,
    CharacterDisplayComponent,
    CharacterListComponent,
    SkillsComponent,
    ResultIconComponent,
    TraitsComponent,
    HeaderComponent,
    IncrementerComponent,
    DetailsComponent,
    AttributesComponent,
    RowRollerComponent,
    LoginComponent,
    EncumbranceComponent,
    LiftingAndMovingComponent,
    HikingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
