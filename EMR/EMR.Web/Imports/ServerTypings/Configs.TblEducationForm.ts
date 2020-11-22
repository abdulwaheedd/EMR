namespace EMR.Configs {
    export interface TblEducationForm {
        EducationDari: Serenity.StringEditor;
        EducationEng: Serenity.StringEditor;
    }

    export class TblEducationForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.TblEducation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblEducationForm.init)  {
                TblEducationForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TblEducationForm, [
                    'EducationDari', w0,
                    'EducationEng', w0
                ]);
            }
        }
    }
}

