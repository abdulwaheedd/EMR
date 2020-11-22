namespace EMR.Configs {
    export interface TopographySubForm {
        Icd0Code: Serenity.IntegerEditor;
        TopographySName: Serenity.StringEditor;
        TopomainId: Serenity.LookupEditor;
    }

    export class TopographySubForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.TopographySub';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TopographySubForm.init)  {
                TopographySubForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.LookupEditor;

                Q.initFormType(TopographySubForm, [
                    'Icd0Code', w0,
                    'TopographySName', w1,
                    'TopomainId', w2
                ]);
            }
        }
    }
}

