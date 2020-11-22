namespace EMR.Configs {
    export interface StagesForm {
        Stagename: Serenity.StringEditor;
    }

    export class StagesForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.Stages';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StagesForm.init)  {
                StagesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(StagesForm, [
                    'Stagename', w0
                ]);
            }
        }
    }
}

