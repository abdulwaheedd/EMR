namespace EMR.Regs {
    export interface TblDischargeForm {
        Mrid: Serenity.IntegerEditor;
        MRN: Serenity.StringEditor;
        Wardid: Serenity.IntegerEditor;
        DisDiagnosis: Serenity.StringEditor;
        DisDate: Serenity.DateEditor;
        DisDateH: Serenity.StringEditor;
        DisStatus: Serenity.StringEditor;
        UserName: Serenity.StringEditor;
        LastUpdated: Serenity.DateEditor;
        TenantId: Serenity.IntegerEditor;
        DisDiagResult: Serenity.IntegerEditor;
    }

    export class TblDischargeForm extends Serenity.PrefixedContext {
        static formKey = 'Regs.TblDischarge';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblDischargeForm.init)  {
                TblDischargeForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(TblDischargeForm, [
                    'Mrid', w0,
                    'MRN', w1,
                    'Wardid', w0,
                    'DisDiagnosis', w1,
                    'DisDate', w2,
                    'DisDateH', w1,
                    'DisStatus', w1,
                    'UserName', w1,
                    'LastUpdated', w2,
                    'TenantId', w0,
                    'DisDiagResult', w0
                ]);
            }
        }
    }
}

