namespace EMR.Configs {
    export interface TblProfessionsForm {
        ProName: Serenity.StringEditor;
        ProNameD: Serenity.StringEditor;
    }

    export class TblProfessionsForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.TblProfessions';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblProfessionsForm.init)  {
                TblProfessionsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TblProfessionsForm, [
                    'ProName', w0,
                    'ProNameD', w0
                ]);
            }
        }
    }
}

