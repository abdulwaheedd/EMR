namespace EMR.Configs {
    export interface TblPositionsForm {
        EmpId: Serenity.StringEditor;
        DeptId: Serenity.IntegerEditor;
        ProId: Serenity.IntegerEditor;
        PosDate: Serenity.DateEditor;
        PosDateH: Serenity.StringEditor;
        UserName: Serenity.StringEditor;
        LastUpdated: Serenity.DateEditor;
        TenantId: Serenity.IntegerEditor;
    }

    export class TblPositionsForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.TblPositions';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblPositionsForm.init)  {
                TblPositionsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(TblPositionsForm, [
                    'EmpId', w0,
                    'DeptId', w1,
                    'ProId', w1,
                    'PosDate', w2,
                    'PosDateH', w0,
                    'UserName', w0,
                    'LastUpdated', w2,
                    'TenantId', w1
                ]);
            }
        }
    }
}

