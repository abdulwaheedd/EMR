namespace EMR.Configs {
    export interface TblBloodGroupForm {
        BloodGroup: Serenity.StringEditor;
    }

    export class TblBloodGroupForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.TblBloodGroup';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblBloodGroupForm.init)  {
                TblBloodGroupForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TblBloodGroupForm, [
                    'BloodGroup', w0
                ]);
            }
        }
    }
}

