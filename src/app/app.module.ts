import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { PlayersModule } from './players/players.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { RootNavigationComponent } from './main-navigation/navigation/root-navigation.component';
import { NavItemComponent } from './main-navigation/navigation/nav-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MainNavigationComponent,
    RootNavigationComponent,
    NavItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PlayersModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
