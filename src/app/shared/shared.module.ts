import { NgModule } from '@angular/core';

import { RestApiService } from './restapi.service';
import { InjuryLookupService } from './lookup/injury-lookup.service';
import { TeamLookupService } from './lookup/team-lookup.service';
import { FormFieldsService } from './forms/fields/form-fields.service';

@NgModule({
  providers: [RestApiService, InjuryLookupService, TeamLookupService, FormFieldsService]
})
export class SharedModule { }