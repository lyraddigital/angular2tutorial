import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  registrationForm: FormGroup;
  registrationViewModel: RegistrationViewModel;
  teamLookupList: TeamLookup[];
  injuryLookupList: string[];
  injuryFieldList: string[];
  
  constructor(
    private injuryLookupService: InjuryLookupService,
    private teamLookupService: TeamLookupService,
    private fb: FormBuilder
  ) { 
    this.registrationViewModel = new RegistrationViewModel();
  }

  ngOnInit() {
    this.teamLookupList = this.teamLookupService.getTeamsLookup();
    this.injuryLookupList = this.injuryLookupService.getInjuriesLookup();
    this.buildForm();
    this.initialiseInjuryFieldList();
  }

  buildForm() {
    this.registrationForm = this.fb.group({
      'firstName': [this.registrationViewModel.firstName, [Validators.required]],
      'lastName': [this.registrationViewModel.lastName, [Validators.required]],
      'email': [this.registrationViewModel.email, [Validators.required]],
      'biography': [this.registrationViewModel.biography],
      'dob': [this.registrationViewModel.dob, [Validators.required]],
      'teamId': [this.registrationViewModel.teamIdJoined, [Validators.required]],
      'heightInFeet': [this.registrationViewModel.heightInFeet, [Validators.required]],
      'heightInInches': [this.registrationViewModel.heightInInches, [Validators.required]],
      'weight': [this.registrationViewModel.weight, [Validators.required]],
      'position': [this.registrationViewModel.position, [Validators.required]],
      'password': [this.registrationViewModel.password, [Validators.required]]
    });

    this.registrationForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  private onValueChanged(data?: any) {
    if (!this.registrationForm) { return; }
    const form = this.registrationForm;

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

  submit() {
    this.registrationViewModel = this.registrationForm.value;
    console.log(JSON.stringify(this.registrationViewModel));
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

  private formErrors = {
    'firstName': '',
    'lastName': '',
    'email': '',
    'dob': '',
    'teamId': '',
    'heightInFeet': '',
    'heightInInches': '',
    'weight': '',
    'position': '',
    'password': ''
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
}