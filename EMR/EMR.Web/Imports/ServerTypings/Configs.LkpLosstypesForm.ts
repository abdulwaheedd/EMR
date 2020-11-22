namespace EMR.Configs {
    export interface LkpLosstypesForm {
        Name: Serenity.StringEditor;
    }

    export class LkpLosstypesForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.LkpLosstypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LkpLosstypesForm.init)  {
                LkpLosstypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(LkpLosstypesForm, [
                    'Name', w0
                ]);
            }
        }
    }
}

