import { Injectable } from '@angular/core';

import { FormField } from './form-field';
import { InputField } from './input-field';
import { InputType } from './input-type';

@Injectable()
export class FormFieldsService {
  getFieldsForForm(): FormField[] {
    let teamNameField = new InputField("teamName", "Team Name", InputType.Text, "Enter Team Name");
    let numberOfWinsField = new InputField("numberOfWins", "Wins", InputType.Number, "Enter number of wins");
    let numberOfLossesField = new InputField("numberOfLosses", "Losses", InputType.Number, "Enter number of losses");

    return [teamNameField, numberOfWinsField, numberOfLossesField];
  }
}
