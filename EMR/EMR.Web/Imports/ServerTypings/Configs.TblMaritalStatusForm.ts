namespace EMR.Configs {
    export interface TblMaritalStatusForm {
        PatMaritalStatusEng: Serenity.StringEditor;
        PatMaritalStatusDari: Serenity.StringEditor;
    }

    export class TblMaritalStatusForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.TblMaritalStatus';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblMaritalStatusForm.init)  {
                TblMaritalStatusForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TblMaritalStatusForm, [
                    'PatMaritalStatusEng', w0,
                    'PatMaritalStatusDari', w0
                ]);
            }
        }
    }
}

