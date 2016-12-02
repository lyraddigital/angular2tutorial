import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { TeamsRoutingModule } from './teams.routing';
import { TeamListComponent } from './team-list/team-list.component';

@NgModule({
    declarations: [TeamListComponent],
    imports: [BrowserModule, FormsModule, SharedModule, TeamsRoutingModule]
})
export class TeamsModule { }