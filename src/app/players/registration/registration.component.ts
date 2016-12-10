import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RegistrationViewModel } from './registrationViewModel';
import { TeamLookup } from '../../shared/lookup/team-lookup';
import { InjuryLookupService } from '../../shared/lookup/injury-lookup.service';
import { TeamLookupService } from '../../shared/lookup/team-lookup.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: NgForm;
  @ViewChild('registrationForm') currentForm: NgForm;
  registrationViewModel: RegistrationViewModel;
  teamLookupList: TeamLookup[];
  injuryLookupList: string[];
  injuryFieldList: string[];

  private formErrors = {
    'firstName': '',
    'lastName': '',
    'email': '',
    'dob': '',
    'teamId': '',
    'heightInFeet': '',
    'heightInInches': '',
    'weight': '',
    'position': ''
  };

  private validationMessages = {
    'firstName': {
      'required': 'First name is required'
    },
    'lastName': {
      'required': 'Last name is required'
    },
    'email': {
      'required': 'Email is required'
    },
    'dob': {
      'required': 'DOB is required'
    },
    'teamId': {
      'required': 'Team is required'
    },
    'heightInFeet': {
      'required': 'Height in feet is required'
    },
    'heightInInches': {
      'required': 'Height in inches is required'
    },
    'weight': {
      'required': 'Weight in pounds is required'
    },
    'position': {
      'required': 'Position is required'
    },
    'password': {
      'required': 'Password is required'
    }
  };
  
  constructor(
    private injuryLookupService: InjuryLookupService,
    private teamLookupService: TeamLookupService
  ) { 
    this.registrationViewModel = new RegistrationViewModel();
  }

  ngOnInit() {
    this.teamLookupList = this.teamLookupService.getTeamsLookup();
    this.injuryLookupList = this.injuryLookupService.getInjuriesLookup();
    this.initialiseInjuryFieldList();
  }

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    if (this.currentForm === this.registrationForm) { return; }
    this.registrationForm = this.currentForm;
    
    if (this.registrationForm) {
      this.registrationForm.valueChanges.subscribe(data => this.onValueChanged(data));
    }
  }

  private onValueChanged(data?: any) {
    if (!this.registrationForm) { return; }
    const form = this.registrationForm.form;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
  
      if (control && control.dirty && control.invalid) {
        const messages = this.validationMessages[field];
        
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  private initialiseInjuryFieldList() {
    this.injuryFieldList = [];

    for(let injury of this.injuryLookupList) {
      this.injuryFieldList.push(injury.trim().replace(" ", "").toLowerCase());
    }
  }

  addOrRemoveInjury(value: string) {
    var indexOfEntry = this.registrationViewModel.injuries.indexOf(value);
    
    if(indexOfEntry < 0) {
      this.registrationViewModel.injuries.push(value);
    }
    else {
      this.registrationViewModel.injuries.splice(indexOfEntry, 1);
    }
  }
}