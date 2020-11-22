namespace EMR.LabTest {
    export interface LabTestsForm {
        VisitId: Serenity.StringEditor;
        TestTypeId: Serenity.LookupEditor;
        LabTestId: Serenity.LookupEditor;
        NormalRange: Serenity.StringEditor;
        Unit: Serenity.StringEditor;
        Result: Serenity.StringEditor;
        LabDateTime: Serenity.DateTimeEditor;
        SlabDate: Common.ShamsiDatePickerEditor;
    }

    export class LabTestsForm extends Serenity.PrefixedContext {
        static formKey = 'LabTest.LabTests';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LabTestsForm.init)  {
                LabTestsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateTimeEditor;
                var w3 = Common.ShamsiDatePickerEditor;

                Q.initFormType(LabTestsForm, [
                    'VisitId', w0,
                    'TestTypeId', w1,
                    'LabTestId', w1,
                    'NormalRange', w0,
                    'Unit', w0,
                    'Result', w0,
                    'LabDateTime', w2,
                    'SlabDate', w3
                ]);
            }
        }
    }
}

