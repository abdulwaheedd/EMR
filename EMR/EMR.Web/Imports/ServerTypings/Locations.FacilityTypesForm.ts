namespace EMR.Locations {
    export interface FacilityTypesForm {
        FacTypeCode: Serenity.IntegerEditor;
        FacType: Serenity.StringEditor;
        FacTypeDari: Serenity.StringEditor;
        FacTypePashto: Serenity.StringEditor;
    }

    export class FacilityTypesForm extends Serenity.PrefixedContext {
        static formKey = 'Locations.FacilityTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FacilityTypesForm.init)  {
                FacilityTypesForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(FacilityTypesForm, [
                    'FacTypeCode', w0,
                    'FacType', w1,
                    'FacTypeDari', w1,
                    'FacTypePashto', w1
                ]);
            }
        }
    }
}

