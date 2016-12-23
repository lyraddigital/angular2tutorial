import { FieldType } from './field-type';

export class FormField {
    key: string;
    label: string;
    fieldType: FieldType

    constructor(key: string, label: string, fieldType: FieldType) {
        this.key = key;
        this.label = label;
        this.fieldType = fieldType;
    }
}