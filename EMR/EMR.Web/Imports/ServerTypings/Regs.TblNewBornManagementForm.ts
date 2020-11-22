namespace EMR.Regs {
    export interface TblNewBornManagementForm {
        AdId: Serenity.StringEditor;
        NbStatus: Serenity.LookupEditor;
        NbOutcome: Serenity.LookupEditor;
        NbWeight: Serenity.LookupEditor;
        NbNumber: Serenity.LookupEditor;
        NbGender: Serenity.LookupEditor;
    }

    export class TblNewBornManagementForm extends Serenity.PrefixedContext {
        static formKey = 'Regs.TblNewBornManagement';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblNewBornManagementForm.init)  {
                TblNewBornManagementForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(TblNewBornManagementForm, [
                    'AdId', w0,
                    'NbStatus', w1,
                    'NbOutcome', w1,
                    'NbWeight', w1,
                    'NbNumber', w1,
                    'NbGender', w1
                ]);
            }
        }
    }
}

