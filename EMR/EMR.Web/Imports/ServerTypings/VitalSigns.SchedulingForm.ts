namespace EMR.VitalSigns {
    export interface SchedulingForm {
        VisitId: Serenity.StringEditor;
        CycleId: Serenity.IntegerEditor;
        PlanDate: Serenity.DateEditor;
        SPlanDate: Common.ShamsiDatePickerEditor;
        Comment: Serenity.HtmlContentEditor;
    }

    export class SchedulingForm extends Serenity.PrefixedContext {
        static formKey = 'VitalSigns.Scheduling';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SchedulingForm.init)  {
                SchedulingForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;
                var w3 = Common.ShamsiDatePickerEditor;
                var w4 = s.HtmlContentEditor;

                Q.initFormType(SchedulingForm, [
                    'VisitId', w0,
                    'CycleId', w1,
                    'PlanDate', w2,
                    'SPlanDate', w3,
                    'Comment', w4
                ]);
            }
        }
    }
}

