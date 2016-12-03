import { Component, OnInit } from '@angular/core';

import { Team } from '../../shared/teams/team';
import { RestApiService } from '../../shared/restapi.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  listOfTeams: Team[];
  selectedTeam: Team;

  constructor(private apiService: RestApiService) {}

  ngOnInit() {
    this.listOfTeams = this.apiService.getListOfTeams();
  }

  selectTeam(selectedTeam: Team) {
    this.selectedTeam = selectedTeam;
  }
}