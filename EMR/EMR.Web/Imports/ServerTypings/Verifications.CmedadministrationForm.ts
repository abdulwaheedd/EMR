namespace EMR.Verifications {
    export interface CmedadministrationForm {
        OrderId: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
        Comment: Serenity.HtmlNoteContentEditor;
        RecDateTime: Serenity.DateTimeEditor;
        RecSDate: Common.ShamsiDatePickerEditor;
        AppDateTime: Serenity.DateTimeEditor;
        AppSDate: Common.ShamsiDatePickerEditor;
    }

    export class CmedadministrationForm extends Serenity.PrefixedContext {
        static formKey = 'Verifications.Cmedadministration';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CmedadministrationForm.init)  {
                CmedadministrationForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.HtmlNoteContentEditor;
                var w3 = s.DateTimeEditor;
                var w4 = Common.ShamsiDatePickerEditor;

                Q.initFormType(CmedadministrationForm, [
                    'OrderId', w0,
                    'Quantity', w1,
                    'Comment', w2,
                    'RecDateTime', w3,
                    'RecSDate', w4,
                    'AppDateTime', w3,
                    'AppSDate', w4
                ]);
            }
        }
    }
}

