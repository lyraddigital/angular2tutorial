import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { PlayersRoutingModule } from './players.routing';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';

@NgModule({
    declarations: [PlayerListComponent, PlayerProfileComponent],
    imports: [BrowserModule, FormsModule, SharedModule, PlayersRoutingModule]
})
export class PlayersModule { }