import { Injectable } from '@angular/core';

import { FormField } from './form-field';
import { TextField } from './text-field';
import { TextType } from './text-type';

@Injectable()
export class FormFieldsService {
    getFieldsForForm(): FormField<any>[] {
        let teamNameField = new TextField("teamName", TextType.Text);
        let winsField = new TextField("numberOfWins", TextType.Number);
        let lossField = new TextField("numberOfLosses", TextType.Number);
        
        return [teamNameField, winsField, lossField];
    };
}