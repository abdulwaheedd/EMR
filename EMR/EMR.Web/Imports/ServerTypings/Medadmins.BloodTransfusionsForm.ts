namespace EMR.Medadmins {
    export interface BloodTransfusionsForm {
        VisitId: Serenity.StringEditor;
        BloodGroupId: Serenity.LookupEditor;
        Recomquantity: Serenity.IntegerEditor;
        Transmitquantity: Serenity.IntegerEditor;
        BloodstatusId: Serenity.LookupEditor;
        RecDateTime: Serenity.DateTimeEditor;
        SRecDate: Serenity.StringEditor;
        TransDateTime: Serenity.DateTimeEditor;
        STransDate: Common.ShamsiDatePickerEditor;
    }

    export class BloodTransfusionsForm extends Serenity.PrefixedContext {
        static formKey = 'Medadmins.BloodTransfusions';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BloodTransfusionsForm.init)  {
                BloodTransfusionsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DateTimeEditor;
                var w4 = Common.ShamsiDatePickerEditor;

                Q.initFormType(BloodTransfusionsForm, [
                    'VisitId', w0,
                    'BloodGroupId', w1,
                    'Recomquantity', w2,
                    'Transmitquantity', w2,
                    'BloodstatusId', w1,
                    'RecDateTime', w3,
                    'SRecDate', w0,
                    'TransDateTime', w3,
                    'STransDate', w4
                ]);
            }
        }
    }
}

