namespace EMR.Configs {
    export interface TblAbortionTypeForm {
        AbortionTypeDari: Serenity.StringEditor;
        AbortionTypePashto: Serenity.StringEditor;
        AbortionTypeEn: Serenity.StringEditor;
    }

    export class TblAbortionTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.TblAbortionType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblAbortionTypeForm.init)  {
                TblAbortionTypeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TblAbortionTypeForm, [
                    'AbortionTypeDari', w0,
                    'AbortionTypePashto', w0,
                    'AbortionTypeEn', w0
                ]);
            }
        }
    }
}

