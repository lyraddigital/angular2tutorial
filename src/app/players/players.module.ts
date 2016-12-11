import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { PlayersRoutingModule } from './players.routing';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
    declarations: [PlayerListComponent, PlayerProfileComponent, RegistrationComponent],
    imports: [BrowserModule, ReactiveFormsModule, SharedModule, PlayersRoutingModule]
})
export class PlayersModule { }