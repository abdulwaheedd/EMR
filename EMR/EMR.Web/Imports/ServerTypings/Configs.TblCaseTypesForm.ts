namespace EMR.Configs {
    export interface TblCaseTypesForm {
        CasetypeEn: Serenity.StringEditor;
        CasetypeDari: Serenity.StringEditor;
        CasetypePashto: Serenity.StringEditor;
    }

    export class TblCaseTypesForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.TblCaseTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblCaseTypesForm.init)  {
                TblCaseTypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TblCaseTypesForm, [
                    'CasetypeEn', w0,
                    'CasetypeDari', w0,
                    'CasetypePashto', w0
                ]);
            }
        }
    }
}

