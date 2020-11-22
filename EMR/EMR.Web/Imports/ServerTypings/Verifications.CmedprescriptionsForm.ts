namespace EMR.Verifications {
    export interface CmedprescriptionsForm {
        Mrid: Serenity.StringEditor;
        VisitId: Serenity.StringEditor;
        DateOfVisit: Serenity.DateEditor;
        SDateOfVisit: Serenity.StringEditor;
        MedicineId: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
        DailyDose: Serenity.StringEditor;
        Comment: Serenity.HtmlNoteContentEditor;
    }

    export class CmedprescriptionsForm extends Serenity.PrefixedContext {
        static formKey = 'Verifications.Cmedprescriptions';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CmedprescriptionsForm.init)  {
                CmedprescriptionsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.LookupEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.HtmlNoteContentEditor;

                Q.initFormType(CmedprescriptionsForm, [
                    'Mrid', w0,
                    'VisitId', w0,
                    'DateOfVisit', w1,
                    'SDateOfVisit', w0,
                    'MedicineId', w2,
                    'Quantity', w3,
                    'DailyDose', w0,
                    'Comment', w4
                ]);
            }
        }
    }
}

