/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormFieldsService } from './form-fields.service';

describe('FormFieldsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormFieldsService]
    });
  });

  it('should ...', inject([FormFieldsService], (service: FormFieldsService) => {
    expect(service).toBeTruthy();
  }));
});
