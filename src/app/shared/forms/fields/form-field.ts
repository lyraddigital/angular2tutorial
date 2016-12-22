import { FormFieldType } from './form-field-type';

export class FormField<T> {
    key: string;
    fieldType: FormFieldType
    
    constructor(key:string, fieldType: FormFieldType) {
        this.key = key;
        this.fieldType = fieldType;
    }
}