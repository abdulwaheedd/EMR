namespace EMR.Pharmacy {
    export interface MedicinelossesForm {
        MedicineId: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
        OutDate: Serenity.DateEditor;
        LosstypeId: Serenity.LookupEditor;
    }

    export class MedicinelossesForm extends Serenity.PrefixedContext {
        static formKey = 'Pharmacy.Medicinelosses';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MedicinelossesForm.init)  {
                MedicinelossesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(MedicinelossesForm, [
                    'MedicineId', w0,
                    'Quantity', w1,
                    'OutDate', w2,
                    'LosstypeId', w0
                ]);
            }
        }
    }
}

