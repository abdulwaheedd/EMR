namespace EMR.Configs {
    export interface TblNbWeightForm {
        NbWeightDari: Serenity.StringEditor;
        NbWeightPashto: Serenity.StringEditor;
        NbWeightEn: Serenity.StringEditor;
    }

    export class TblNbWeightForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.TblNbWeight';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblNbWeightForm.init)  {
                TblNbWeightForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TblNbWeightForm, [
                    'NbWeightDari', w0,
                    'NbWeightPashto', w0,
                    'NbWeightEn', w0
                ]);
            }
        }
    }
}

