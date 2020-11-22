namespace EMR.Medadmins {
    export interface MedadministrationForm {
        OrderId: Serenity.IntegerEditor;
        Medicine: Serenity.StringEditor;
        Quantity: Serenity.IntegerEditor;
        Comment: Serenity.HtmlNoteContentEditor;
        RecDateTime: Serenity.DateTimeEditor;
        RecSDate: Serenity.StringEditor;
        AppDateTime: Serenity.DateTimeEditor;
        AppSDate: Common.ShamsiDatePickerEditor;
    }

    export class MedadministrationForm extends Serenity.PrefixedContext {
        static formKey = 'Medadmins.Medadministration';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MedadministrationForm.init)  {
                MedadministrationForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.HtmlNoteContentEditor;
                var w3 = s.DateTimeEditor;
                var w4 = Common.ShamsiDatePickerEditor;

                Q.initFormType(MedadministrationForm, [
                    'OrderId', w0,
                    'Medicine', w1,
                    'Quantity', w0,
                    'Comment', w2,
                    'RecDateTime', w3,
                    'RecSDate', w1,
                    'AppDateTime', w3,
                    'AppSDate', w4
                ]);
            }
        }
    }
}

