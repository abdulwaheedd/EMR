namespace EMR.Regs {
    export interface TblTestExaminationsForm {
        AdId: Serenity.StringEditor;
        EdId: Serenity.LookupEditor;
        TestExaminations: Serenity.LookupEditor;
        Diagnosis: Serenity.LookupEditor;
    }

    export class TblTestExaminationsForm extends Serenity.PrefixedContext {
        static formKey = 'Regs.TblTestExaminations';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblTestExaminationsForm.init)  {
                TblTestExaminationsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(TblTestExaminationsForm, [
                    'AdId', w0,
                    'EdId', w1,
                    'TestExaminations', w1,
                    'Diagnosis', w1
                ]);
            }
        }
    }
}

