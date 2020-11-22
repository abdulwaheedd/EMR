namespace EMR.Configs {
    export interface TblAgeTypesForm {
        AgeTypeNameEn: Serenity.StringEditor;
        AgeTypeNameDari: Serenity.StringEditor;
        AgeTypeNamePashto: Serenity.StringEditor;
    }

    export class TblAgeTypesForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.TblAgeTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblAgeTypesForm.init)  {
                TblAgeTypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TblAgeTypesForm, [
                    'AgeTypeNameEn', w0,
                    'AgeTypeNameDari', w0,
                    'AgeTypeNamePashto', w0
                ]);
            }
        }
    }
}

