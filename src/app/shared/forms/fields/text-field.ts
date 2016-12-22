import { FormField } from './form-field';
import { TextType } from './text-type';
import { FormFieldType } from './form-field-type';

export class TextField extends FormField<string> {
    private textTypes: {[id: string]: string};
    private textType: TextType;

    constructor(key: string, textType: TextType) {
        super(key, FormFieldType.TextField);
        
        this.textType = textType;        
        this.registerTextTypesDictionary();
    }

    get textTypeName(): string {
        return this.textTypes[this.textType.toString()];
    }

    private registerTextTypesDictionary() {
        var textTypeString = TextType.Text.toString();
        var numberTypeString = TextType.Number.toString();

        this.textTypes = {
            textTypeString: "text",
            numberTypeString: "number"
        };
    }
}