namespace EMR.Configs {
    export interface TblDeptForm {
        DeptName: Serenity.StringEditor;
        DeptNameD: Serenity.StringEditor;
    }

    export class TblDeptForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.TblDept';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblDeptForm.init)  {
                TblDeptForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TblDeptForm, [
                    'DeptName', w0,
                    'DeptNameD', w0
                ]);
            }
        }
    }
}

