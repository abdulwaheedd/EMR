namespace EMR.Configs {
    export interface LkpPatientTypeForm {
        TypeNameEn: Serenity.StringEditor;
        TypeNameDari: Serenity.StringEditor;
        TypeNamePashto: Serenity.StringEditor;
    }

    export class LkpPatientTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.LkpPatientType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LkpPatientTypeForm.init)  {
                LkpPatientTypeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(LkpPatientTypeForm, [
                    'TypeNameEn', w0,
                    'TypeNameDari', w0,
                    'TypeNamePashto', w0
                ]);
            }
        }
    }
}

