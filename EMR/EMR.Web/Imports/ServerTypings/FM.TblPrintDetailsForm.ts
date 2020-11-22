namespace EMR.FM {
    export interface TblPrintDetailsForm {
        FeeId: Serenity.StringEditor;
        DateTimePrinted: Serenity.DateEditor;
        PrintedBy: Serenity.StringEditor;
    }

    export class TblPrintDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'FM.TblPrintDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblPrintDetailsForm.init)  {
                TblPrintDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(TblPrintDetailsForm, [
                    'FeeId', w0,
                    'DateTimePrinted', w1,
                    'PrintedBy', w0
                ]);
            }
        }
    }
}

