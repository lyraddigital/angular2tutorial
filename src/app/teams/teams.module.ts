import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TeamsRoutingModule } from './teams.routing';
import { TeamListComponent } from './team-list/team-list.component';

@NgModule({
    declarations: [TeamListComponent],
    imports: [BrowserModule, FormsModule, TeamsRoutingModule]
})
export class TeamsModule { }