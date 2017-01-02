import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Team } from '../../shared/teams/team';
import { FormField } from '../../shared/forms/fields/form-field';
import { FormFieldsService } from '../../shared/forms/fields/form-fields.service';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent {
  @Input()
  selectedTeam: Team;
  formFields: FormField[];
  teamEditForm: FormGroup;
  showNotEditing: boolean;

  constructor(private formFieldsService: FormFieldsService) { }

  ngOnChanges() {
    if(this.selectedTeam)
    {
      this.showNotEditing = false;
      this.formFields = this.formFieldsService.getFieldsForForm();

      if(this.formFields && this.formFields.length > 0)
      {
        let controls = {};

        this.formFields.forEach(field => {
          controls[field.key] = new FormControl(this.selectedTeam[field.key]);
        });

        this.teamEditForm = new FormGroup(controls);
      }
      else {
        this.teamEditForm = new FormGroup({});
      }
    }
    else {
      this.teamEditForm = new FormGroup({});
    }
  }

  saveTeam() {
    for(var propertyName in this.teamEditForm.value) {
      this.selectedTeam[propertyName] = this.teamEditForm.value[propertyName];
    }

    // Ensure that the form closes.
    this.selectedTeam = null; 
  }
}