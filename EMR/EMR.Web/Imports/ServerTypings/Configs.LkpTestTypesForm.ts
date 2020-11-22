namespace EMR.Configs {
    export interface LkpTestTypesForm {
        TestTypeName: Serenity.StringEditor;
    }

    export class LkpTestTypesForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.LkpTestTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LkpTestTypesForm.init)  {
                LkpTestTypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(LkpTestTypesForm, [
                    'TestTypeName', w0
                ]);
            }
        }
    }
}

