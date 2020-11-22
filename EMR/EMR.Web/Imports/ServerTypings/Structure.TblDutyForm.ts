namespace EMR.Structure {
    export interface TblDutyForm {
        EmpId: Serenity.StringEditor;
        WardId: Serenity.IntegerEditor;
        DutYear: Serenity.IntegerEditor;
        DutMonth: Serenity.IntegerEditor;
        UserName: Serenity.StringEditor;
        LastUpdated: Serenity.DateEditor;
        TenantId: Serenity.IntegerEditor;
    }

    export class TblDutyForm extends Serenity.PrefixedContext {
        static formKey = 'Structure.TblDuty';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblDutyForm.init)  {
                TblDutyForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(TblDutyForm, [
                    'EmpId', w0,
                    'WardId', w1,
                    'DutYear', w1,
                    'DutMonth', w1,
                    'UserName', w0,
                    'LastUpdated', w2,
                    'TenantId', w1
                ]);
            }
        }
    }
}

