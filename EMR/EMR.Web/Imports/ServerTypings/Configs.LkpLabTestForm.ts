namespace EMR.Configs {
    export interface LkpLabTestForm {
        LabTestName: Serenity.StringEditor;
        SubTypeTestId: Serenity.LookupEditor;
        NormalRange: Serenity.StringEditor;
        TestPrice: Serenity.DecimalEditor;
        Unit: Serenity.StringEditor;
    }

    export class LkpLabTestForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.LkpLabTest';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LkpLabTestForm.init)  {
                LkpLabTestForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(LkpLabTestForm, [
                    'LabTestName', w0,
                    'SubTypeTestId', w1,
                    'NormalRange', w0,
                    'TestPrice', w2,
                    'Unit', w0
                ]);
            }
        }
    }
}

