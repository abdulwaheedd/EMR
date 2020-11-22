namespace EMR.OPD {
    export interface OpdBloodTransfusionsForm {
        VisitId: Serenity.StringEditor;
        BloodGroupId: Serenity.LookupEditor;
        Recomquantity: Serenity.IntegerEditor;
        Transmitquantity: Serenity.IntegerEditor;
        BloodstatusId: Serenity.LookupEditor;
        RecDateTime: Serenity.DateTimeEditor;
        SRecDate: Common.ShamsiDatePickerEditor;
        TransDateTime: Serenity.DateTimeEditor;
        STransDate: Serenity.StringEditor;
    }

    export class OpdBloodTransfusionsForm extends Serenity.PrefixedContext {
        static formKey = 'OPD.OpdBloodTransfusions';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OpdBloodTransfusionsForm.init)  {
                OpdBloodTransfusionsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DateTimeEditor;
                var w4 = Common.ShamsiDatePickerEditor;

                Q.initFormType(OpdBloodTransfusionsForm, [
                    'VisitId', w0,
                    'BloodGroupId', w1,
                    'Recomquantity', w2,
                    'Transmitquantity', w2,
                    'BloodstatusId', w1,
                    'RecDateTime', w3,
                    'SRecDate', w4,
                    'TransDateTime', w3,
                    'STransDate', w0
                ]);
            }
        }
    }
}

