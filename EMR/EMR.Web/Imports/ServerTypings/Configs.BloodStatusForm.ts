namespace EMR.Configs {
    export interface BloodStatusForm {
        Bloodstatus: Serenity.StringEditor;
    }

    export class BloodStatusForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.BloodStatus';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BloodStatusForm.init)  {
                BloodStatusForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(BloodStatusForm, [
                    'Bloodstatus', w0
                ]);
            }
        }
    }
}

