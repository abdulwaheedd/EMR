namespace EMR.Locations {
    export interface ProvincesForm {
        ProvinceEng: Serenity.StringEditor;
        ProvinceDari: Serenity.StringEditor;
        ProvincePashto: Serenity.StringEditor;
        ProvPop: Serenity.IntegerEditor;
        ProvinceAbbrv: Serenity.StringEditor;
    }

    export class ProvincesForm extends Serenity.PrefixedContext {
        static formKey = 'Locations.Provinces';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProvincesForm.init)  {
                ProvincesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(ProvincesForm, [
                    'ProvinceEng', w0,
                    'ProvinceDari', w0,
                    'ProvincePashto', w0,
                    'ProvPop', w1,
                    'ProvinceAbbrv', w0
                ]);
            }
        }
    }
}

