import { NgModule } from '@angular/core';

import { RestApiService } from './restapi.service';
import { InjuryLookupService } from './lookup/injury-lookup.service';
import { TeamLookupService } from './lookup/team-lookup.service';

@NgModule({
  providers: [RestApiService, InjuryLookupService, TeamLookupService]
})
export class SharedModule { }