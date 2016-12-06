import { Injectable } from '@angular/core';

import { TeamLookup } from './team-lookup';
import { MOCK_TEAM_LOOKUP } from './mock-teams-lookup';

@Injectable()
export class TeamLookupService {
  getTeamsLookup(): TeamLookup[] {
    return MOCK_TEAM_LOOKUP;
  }
}