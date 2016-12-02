import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PlayersRoutingModule } from './players.routing';
import { PlayerListComponent } from './player-list/player-list.component';

@NgModule({
    declarations: [PlayerListComponent],
    imports: [BrowserModule, FormsModule, PlayersRoutingModule]
})
export class PlayersModule { }