/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InjuryLookupService } from './injury-lookup.service';

describe('InjuryLookupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InjuryLookupService]
    });
  });

  it('should ...', inject([InjuryLookupService], (service: InjuryLookupService) => {
    expect(service).toBeTruthy();
  }));
});
