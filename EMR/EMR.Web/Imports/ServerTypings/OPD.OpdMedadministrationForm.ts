namespace EMR.OPD {
    export interface OpdMedadministrationForm {
        OrderId: Serenity.IntegerEditor;
        Medicine: Serenity.StringEditor;
        Quantity: Serenity.IntegerEditor;
        Comment: Serenity.HtmlNoteContentEditor;
        RecDateTime: Serenity.DateTimeEditor;
        RecSDate: Common.ShamsiDatePickerEditor;
        AppDateTime: Serenity.DateTimeEditor;
        AppSDate: Serenity.StringEditor;
    }

    export class OpdMedadministrationForm extends Serenity.PrefixedContext {
        static formKey = 'OPD.OpdMedadministration';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OpdMedadministrationForm.init)  {
                OpdMedadministrationForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.HtmlNoteContentEditor;
                var w3 = s.DateTimeEditor;
                var w4 = Common.ShamsiDatePickerEditor;

                Q.initFormType(OpdMedadministrationForm, [
                    'OrderId', w0,
                    'Medicine', w1,
                    'Quantity', w0,
                    'Comment', w2,
                    'RecDateTime', w3,
                    'RecSDate', w4,
                    'AppDateTime', w3,
                    'AppSDate', w1
                ]);
            }
        }
    }
}

