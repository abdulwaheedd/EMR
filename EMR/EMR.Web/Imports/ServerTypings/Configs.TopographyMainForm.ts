namespace EMR.Configs {
    export interface TopographyMainForm {
        TopographyMName: Serenity.StringEditor;
        Icd0Code: Serenity.StringEditor;
    }

    export class TopographyMainForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.TopographyMain';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TopographyMainForm.init)  {
                TopographyMainForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TopographyMainForm, [
                    'TopographyMName', w0,
                    'Icd0Code', w0
                ]);
            }
        }
    }
}

