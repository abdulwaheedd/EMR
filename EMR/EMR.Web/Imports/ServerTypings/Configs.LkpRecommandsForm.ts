namespace EMR.Configs {
    export interface LkpRecommandsForm {
        RecommandName: Serenity.StringEditor;
    }

    export class LkpRecommandsForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.LkpRecommands';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LkpRecommandsForm.init)  {
                LkpRecommandsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(LkpRecommandsForm, [
                    'RecommandName', w0
                ]);
            }
        }
    }
}

