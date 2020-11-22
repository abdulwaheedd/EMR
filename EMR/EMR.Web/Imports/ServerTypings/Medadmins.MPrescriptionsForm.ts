namespace EMR.Medadmins {
    export interface MPrescriptionsForm {
        VisitId: Serenity.StringEditor;
        MedicineId: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
        DailyDose: Serenity.StringEditor;
        Comment: Serenity.StringEditor;
    }

    export class MPrescriptionsForm extends Serenity.PrefixedContext {
        static formKey = 'Medadmins.MPrescriptions';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MPrescriptionsForm.init)  {
                MPrescriptionsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(MPrescriptionsForm, [
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

