namespace EMR.Structure {
    export interface TblEmpForm {
        EmpName: Serenity.StringEditor;
        EmpNameD: Serenity.StringEditor;
        EmpFatherName: Serenity.StringEditor;
        EmpFatherNameD: Serenity.StringEditor;
        EmpLastName: Serenity.StringEditor;
        EmpLastNameD: Serenity.StringEditor;
        UserName: Serenity.StringEditor;
        LastUpdated: Serenity.DateEditor;
        TenantId: Serenity.IntegerEditor;
    }

    export class TblEmpForm extends Serenity.PrefixedContext {
        static formKey = 'Structure.TblEmp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblEmpForm.init)  {
                TblEmpForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(TblEmpForm, [
                    'EmpName', w0,
                    'EmpNameD', w0,
                    'EmpFatherName', w0,
                    'EmpFatherNameD', w0,
                    'EmpLastName', w0,
                    'EmpLastNameD', w0,
                    'UserName', w0,
                    'LastUpdated', w1,
                    'TenantId', w2
                ]);
            }
        }
    }
}

