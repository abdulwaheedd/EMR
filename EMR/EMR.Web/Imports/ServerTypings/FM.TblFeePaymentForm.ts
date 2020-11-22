namespace EMR.FM {
    export interface TblFeePaymentForm {
        Mrid: Serenity.StringEditor;
        ServiceId: Serenity.IntegerEditor;
        ServiceFee: Serenity.IntegerEditor;
        DateCreated: Serenity.DateEditor;
        Times: Serenity.IntegerEditor;
    }

    export class TblFeePaymentForm extends Serenity.PrefixedContext {
        static formKey = 'FM.TblFeePayment';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblFeePaymentForm.init)  {
                TblFeePaymentForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(TblFeePaymentForm, [
                    'Mrid', w0,
                    'ServiceId', w1,
                    'ServiceFee', w1,
                    'DateCreated', w2,
                    'Times', w1
                ]);
            }
        }
    }
}

