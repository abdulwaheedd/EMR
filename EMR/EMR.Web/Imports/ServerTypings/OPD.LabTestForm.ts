namespace EMR.OPD {
    export interface LabTestForm {
        VisitId: Serenity.StringEditor;
        TestTypeId: Serenity.LookupEditor;
        LabTestId: Serenity.LookupEditor;
        NormalRange: Serenity.StringEditor;
        Unit: Serenity.StringEditor;
        Result: Serenity.StringEditor;
        LabDateTime: Serenity.DateEditor;
        SlabDate: Serenity.StringEditor;
    }

    export class LabTestForm extends Serenity.PrefixedContext {
        static formKey = 'OPD.LabTest';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LabTestForm.init)  {
                LabTestForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;

                Q.initFormType(LabTestForm, [
                    'VisitId', w0,
                    'TestTypeId', w1,
                    'LabTestId', w1,
                    'NormalRange', w0,
                    'Unit', w0,
                    'Result', w0,
                    'LabDateTime', w2,
                    'SlabDate', w0
                ]);
            }
        }
    }
}

