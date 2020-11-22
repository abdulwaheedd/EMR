namespace EMR.FM {
    export interface LkpServiceTypesForm {
        ServiceTypeDari: Serenity.StringEditor;
        ServiceTypePashto: Serenity.StringEditor;
        ServiceTypeEn: Serenity.StringEditor;
    }

    export class LkpServiceTypesForm extends Serenity.PrefixedContext {
        static formKey = 'FM.LkpServiceTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LkpServiceTypesForm.init)  {
                LkpServiceTypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(LkpServiceTypesForm, [
                    'ServiceTypeDari', w0,
                    'ServiceTypePashto', w0,
                    'ServiceTypeEn', w0
                ]);
            }
        }
    }
}

