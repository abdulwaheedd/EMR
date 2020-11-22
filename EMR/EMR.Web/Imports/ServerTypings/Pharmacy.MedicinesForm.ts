namespace EMR.Pharmacy {
    export interface MedicinesForm {
        GenericName: Serenity.StringEditor;
        BrandName: Serenity.StringEditor;
        Strength: Serenity.StringEditor;
        FormId: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
        UnitPrice: Serenity.DecimalEditor;
        BatchNo: Serenity.StringEditor;
        QuantityUsed: Serenity.IntegerEditor;
        InDate: Serenity.DateEditor;
        SInDate: Common.ShamsiDatePickerEditor;
        ExpiryDate: Serenity.DateEditor;
        SExpiryDate: Common.ShamsiDatePickerEditor;
        Mid: Serenity.LookupEditor;
        Vid: Serenity.LookupEditor;
        Discontinue: Serenity.BooleanEditor;
    }

    export class MedicinesForm extends Serenity.PrefixedContext {
        static formKey = 'Pharmacy.Medicines';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MedicinesForm.init)  {
                MedicinesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.DateEditor;
                var w5 = Common.ShamsiDatePickerEditor;
                var w6 = s.BooleanEditor;

                Q.initFormType(MedicinesForm, [
                    'GenericName', w0,
                    'BrandName', w0,
                    'Strength', w0,
                    'FormId', w1,
                    'Quantity', w2,
                    'UnitPrice', w3,
                    'BatchNo', w0,
                    'QuantityUsed', w2,
                    'InDate', w4,
                    'SInDate', w5,
                    'ExpiryDate', w4,
                    'SExpiryDate', w5,
                    'Mid', w1,
                    'Vid', w1,
                    'Discontinue', w6
                ]);
            }
        }
    }
}

