namespace EMR.Regs {
    export interface TblOperationsForm {
        AdId: Serenity.StringEditor;
        WardId: Serenity.LookupEditor;
        Wvid: Serenity.LookupEditor;
        AdValue: Serenity.LookupEditor;
        Remarks: Serenity.TextAreaEditor;
    }

    export class TblOperationsForm extends Serenity.PrefixedContext {
        static formKey = 'Regs.TblOperations';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblOperationsForm.init)  {
                TblOperationsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(TblOperationsForm, [
                    'AdId', w0,
                    'WardId', w1,
                    'Wvid', w1,
                    'AdValue', w1,
                    'Remarks', w2
                ]);
            }
        }
    }
}

