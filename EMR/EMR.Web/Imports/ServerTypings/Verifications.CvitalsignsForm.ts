namespace EMR.Verifications {
    export interface CvitalsignsForm {
        Mrid: Serenity.StringEditor;
        VisitId: Serenity.StringEditor;
        DateOfVisit: Serenity.DateEditor;
        SDateOfVisit: Common.ShamsiDatePickerEditor;
        Weight: Serenity.IntegerEditor;
        Height: Serenity.IntegerEditor;
        Pulse: Serenity.IntegerEditor;
        Rr: Serenity.IntegerEditor;
        Temp: Serenity.IntegerEditor;
        Bp: Serenity.StringEditor;
        Hr: Serenity.IntegerEditor;
        O2: Serenity.IntegerEditor;
        Pain: Serenity.IntegerEditor;
        VitalDateTime: Serenity.DateTimeEditor;
        SVitalDate: Common.ShamsiDatePickerEditor;
    }

    export class CvitalsignsForm extends Serenity.PrefixedContext {
        static formKey = 'Verifications.Cvitalsigns';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CvitalsignsForm.init)  {
                CvitalsignsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = Common.ShamsiDatePickerEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.DateTimeEditor;

                Q.initFormType(CvitalsignsForm, [
                    'Mrid', w0,
                    'VisitId', w0,
                    'DateOfVisit', w1,
                    'SDateOfVisit', w2,
                    'Weight', w3,
                    'Height', w3,
                    'Pulse', w3,
                    'Rr', w3,
                    'Temp', w3,
                    'Bp', w0,
                    'Hr', w3,
                    'O2', w3,
                    'Pain', w3,
                    'VitalDateTime', w4,
                    'SVitalDate', w2
                ]);
            }
        }
    }
}

