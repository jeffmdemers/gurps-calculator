import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';
import { CoreComponent } from './core/core.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JumpingComponent } from './jumping/jumping.component';

@NgModule({
  declarations: [
    AppComponent,
    DiceRollerComponent,
    CoreComponent,
    JumpingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
