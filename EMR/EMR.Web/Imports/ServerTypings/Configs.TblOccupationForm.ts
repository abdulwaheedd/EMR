namespace EMR.Configs {
    export interface TblOccupationForm {
        OccupationEng: Serenity.StringEditor;
        OccupationDari: Serenity.StringEditor;
    }

    export class TblOccupationForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.TblOccupation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblOccupationForm.init)  {
                TblOccupationForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TblOccupationForm, [
                    'OccupationEng', w0,
                    'OccupationDari', w0
                ]);
            }
        }
    }
}

