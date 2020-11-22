namespace EMR.Pharmacy {
    export interface MedPrescriptionsForm {
        VisitId: Serenity.StringEditor;
        MedicineId: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
        DailyDose: Serenity.StringEditor;
        Comment: Serenity.StringEditor;
        InsideSale: Serenity.BooleanEditor;
    }

    export class MedPrescriptionsForm extends Serenity.PrefixedContext {
        static formKey = 'Pharmacy.MedPrescriptions';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MedPrescriptionsForm.init)  {
                MedPrescriptionsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(MedPrescriptionsForm, [
                    'VisitId', w0,
                    'MedicineId', w1,
                    'Quantity', w2,
                    'DailyDose', w0,
                    'Comment', w0,
                    'InsideSale', w3
                ]);
            }
        }
    }
}

