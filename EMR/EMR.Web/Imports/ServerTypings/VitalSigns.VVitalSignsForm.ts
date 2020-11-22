namespace EMR.VitalSigns {
    export interface VVitalSignsForm {
        VisitId: Serenity.StringEditor;
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

    export class VVitalSignsForm extends Serenity.PrefixedContext {
        static formKey = 'VitalSigns.VVitalSigns';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VVitalSignsForm.init)  {
                VVitalSignsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateTimeEditor;
                var w3 = Common.ShamsiDatePickerEditor;

                Q.initFormType(VVitalSignsForm, [
                    'VisitId', w0,
                    'Weight', w1,
                    'Height', w1,
                    'Pulse', w1,
                    'Rr', w1,
                    'Temp', w1,
                    'Bp', w0,
                    'Hr', w1,
                    'O2', w1,
                    'Pain', w1,
                    'VitalDateTime', w2,
                    'SVitalDate', w3
                ]);
            }
        }
    }
}

