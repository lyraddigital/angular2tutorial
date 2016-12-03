import { Component, OnInit } from '@angular/core';

import { Player } from '../../shared/players/player';
import { RestApiService } from '../../shared/restapi.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  selectedPlayer: Player;
  listOfPlayers: Player[];

  constructor(private apiService: RestApiService) {}

  ngOnInit() {
    this.listOfPlayers = this.apiService.getListOfPlayers();
  }

  setSelectedPlayer(selectedPlayer: Player) {
    this.selectedPlayer = selectedPlayer;
  }
}