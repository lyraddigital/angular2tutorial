import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { PlayersRoutingModule } from './players.routing';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { PlayerProfileTransclusionComponent } from './player-profile/transclusion/player-profile-transclusion.component';
import { PlayerProfileHeadingComponent } from './player-profile/transclusion/player-profile-heading.component';
import { PlayerProfileDetailsComponent } from './player-profile/transclusion/player-profile-details.component';
import { PlayerProfileDetailEntryComponent } from './player-profile/transclusion/player-profile-detail-entry.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
    declarations: [
        PlayerListComponent, 
        PlayerProfileComponent, 
        RegistrationComponent, 
        PlayerProfileTransclusionComponent, 
        PlayerProfileHeadingComponent, 
        PlayerProfileDetailsComponent, 
        PlayerProfileDetailEntryComponent],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, SharedModule, PlayersRoutingModule]
})
export class PlayersModule { }