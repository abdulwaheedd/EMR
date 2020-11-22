namespace EMR.Configs {
    export interface TblGenderForm {
        GenderEng: Serenity.StringEditor;
        GenderDa: Serenity.StringEditor;
        GenderPs: Serenity.StringEditor;
    }

    export class TblGenderForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.TblGender';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblGenderForm.init)  {
                TblGenderForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TblGenderForm, [
                    'GenderEng', w0,
                    'GenderDa', w0,
                    'GenderPs', w0
                ]);
            }
        }
    }
}

