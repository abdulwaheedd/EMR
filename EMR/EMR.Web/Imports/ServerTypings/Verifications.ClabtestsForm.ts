namespace EMR.Verifications {
    export interface ClabtestsForm {
        Mrid: Serenity.StringEditor;
        VisitId: Serenity.StringEditor;
        DateOfVisit: Serenity.DateTimeEditor;
        SDateOfVisit: Serenity.StringEditor;
        LabTestId: Serenity.LookupEditor;
        Result: Serenity.StringEditor;
        NormalRange: Serenity.StringEditor;
        Unit: Serenity.StringEditor;
        LabDateTime: Serenity.DateTimeEditor;
        SlabDate: Serenity.StringEditor;
    }

    export class ClabtestsForm extends Serenity.PrefixedContext {
        static formKey = 'Verifications.Clabtests';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClabtestsForm.init)  {
                ClabtestsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateTimeEditor;
                var w2 = s.LookupEditor;

                Q.initFormType(ClabtestsForm, [
                    'Mrid', w0,
                    'VisitId', w0,
                    'DateOfVisit', w1,
                    'SDateOfVisit', w0,
                    'LabTestId', w2,
                    'Result', w0,
                    'NormalRange', w0,
                    'Unit', w0,
                    'LabDateTime', w1,
                    'SlabDate', w0
                ]);
            }
        }
    }
}

