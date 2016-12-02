import { Injectable } from '@angular/core';

import { Player } from './players/player';
import { Team } from './teams/team';
import { MOCK_PLAYERS } from './players/mock-players';
import { MOCK_TEAMS } from './teams/mock-teams';

@Injectable()
export class RestApiService {
    getListOfPlayers(): Player[] {
        return MOCK_PLAYERS;
    }

    getListOfTeams(): Team[] {
        return MOCK_TEAMS;
    }
}