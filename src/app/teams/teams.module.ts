import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { TeamsRoutingModule } from './teams.routing';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamEditComponent } from './team-edit/team-edit.component';

@NgModule({
    declarations: [TeamListComponent, TeamEditComponent],
    imports: [CommonModule, ReactiveFormsModule, SharedModule, TeamsRoutingModule]
})
export class TeamsModule { }