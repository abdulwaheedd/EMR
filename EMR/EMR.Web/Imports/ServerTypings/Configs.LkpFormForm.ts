namespace EMR.Configs {
    export interface LkpFormForm {
        FormName: Serenity.StringEditor;
    }

    export class LkpFormForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.LkpForm';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LkpFormForm.init)  {
                LkpFormForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(LkpFormForm, [
                    'FormName', w0
                ]);
            }
        }
    }
}

