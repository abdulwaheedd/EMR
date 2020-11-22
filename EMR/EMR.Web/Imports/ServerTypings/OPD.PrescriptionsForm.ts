namespace EMR.OPD {
    export interface PrescriptionsForm {
        OrderId: Serenity.StringEditor;
        VisitId: Serenity.StringEditor;
        MedicineId: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
        DailyDose: Serenity.StringEditor;
        Comment: Serenity.StringEditor;
    }

    export class PrescriptionsForm extends Serenity.PrefixedContext {
        static formKey = 'OPD.Prescriptions';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PrescriptionsForm.init)  {
                PrescriptionsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(PrescriptionsForm, [
                    'OrderId', w0,
                    'VisitId', w0,
                    'MedicineId', w1,
                    'Quantity', w2,
                    'DailyDose', w0,
                    'Comment', w0
                ]);
            }
        }
    }
}

