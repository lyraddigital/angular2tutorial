import { FieldType } from './field-type';
import { FormField } from './form-field';
import { InputType } from './input-type';

export class InputField extends FormField {
    placeholder: string;
    inputType: InputType;
    
    constructor(key: string, label:string, inputType: InputType, placeholder:string) {
        super(key, label, FieldType.Input);

        this.inputType = inputType;
        this.placeholder = placeholder;
    }

    get inputTypeName() {
        switch(this.inputType) {
            case InputType.Text:
                return "text";
            case InputType.Number:
                return "number";
        }
    }
}