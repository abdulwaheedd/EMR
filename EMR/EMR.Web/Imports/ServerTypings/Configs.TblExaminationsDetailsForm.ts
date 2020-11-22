namespace EMR.Configs {
    export interface TblExaminationsDetailsForm {
        DpId: Serenity.LookupEditor;
        EdName: Serenity.StringEditor;
    }

    export class TblExaminationsDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.TblExaminationsDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblExaminationsDetailsForm.init)  {
                TblExaminationsDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(TblExaminationsDetailsForm, [
                    'DpId', w0,
                    'EdName', w1
                ]);
            }
        }
    }
}

