namespace EMR.Configs {
    export interface TblDiagnosisForm {
        DiagnosisDari: Serenity.StringEditor;
        DiagnosisPashto: Serenity.StringEditor;
        DiagnosisEn: Serenity.StringEditor;
    }

    export class TblDiagnosisForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.TblDiagnosis';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblDiagnosisForm.init)  {
                TblDiagnosisForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TblDiagnosisForm, [
                    'DiagnosisDari', w0,
                    'DiagnosisPashto', w0,
                    'DiagnosisEn', w0
                ]);
            }
        }
    }
}

