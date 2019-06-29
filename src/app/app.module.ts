import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSidebarComponent } from './components/app-sidebar/app-sidebar.component';
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
import { RodeoComponent } from './components/shared/rodeo/rodeo.component';
import { RowRollerComponent } from './components/shared/row-roller/row-roller.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StandardCardComponent } from './components/standard-card/standard-card.component';
import { ThrowingComponent } from './components/throwing/throwing.component';
import { UserBottomSheetComponent } from './components/user-bottom-sheet/user-bottom-sheet.component';





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
    HeaderComponent,
    IncrementerComponent,
    DetailsComponent,
    AttributesComponent,
    RowRollerComponent,
    LoginComponent,
    EncumbranceComponent,
    LiftingAndMovingComponent,
    UserBottomSheetComponent
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
    MatSliderModule,
    MatExpansionModule,
    MatMenuModule,
    MatBottomSheetModule
  ],
  entryComponents: [UserBottomSheetComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
