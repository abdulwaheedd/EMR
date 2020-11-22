namespace EMR.OPD {
    export interface VschedulingForm {
        VisitId: Serenity.StringEditor;
        CycleId: Serenity.LookupEditor;
        PlanDate: Serenity.DateEditor;
        SPlanDate: Common.ShamsiDatePickerEditor;
        Comment: Serenity.HtmlNoteContentEditor;
    }

    export class VschedulingForm extends Serenity.PrefixedContext {
        static formKey = 'OPD.Vscheduling';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VschedulingForm.init)  {
                VschedulingForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = Common.ShamsiDatePickerEditor;
                var w4 = s.HtmlNoteContentEditor;

                Q.initFormType(VschedulingForm, [
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

