import { Injectable } from '@angular/core';

import { BasketballPlayer } from './players/basketball-player';
import { Team } from './teams/team';
import { MOCK_PLAYERS } from './players/mock-players';
import { MOCK_TEAMS } from './teams/mock-teams';

@Injectable()
export class RestApiService {
    getListOfPlayers(): BasketballPlayer[] {
        return MOCK_PLAYERS;
    }

    getListOfTeams(): Team[] {
        return MOCK_TEAMS;
    }
}