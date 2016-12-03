import { Component, Input } from '@angular/core';

import { Team } from '../../shared/teams/team';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent {
  @Input()
  selectedTeam: Team

  saveTeam() {
    this.selectedTeam = null;
  }
}