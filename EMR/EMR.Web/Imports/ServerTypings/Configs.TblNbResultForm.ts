namespace EMR.Configs {
    export interface TblNbResultForm {
        NbResultDari: Serenity.StringEditor;
        NbResultPashto: Serenity.StringEditor;
        NbResultEn: Serenity.StringEditor;
    }

    export class TblNbResultForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.TblNbResult';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblNbResultForm.init)  {
                TblNbResultForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TblNbResultForm, [
                    'NbResultDari', w0,
                    'NbResultPashto', w0,
                    'NbResultEn', w0
                ]);
            }
        }
    }
}

