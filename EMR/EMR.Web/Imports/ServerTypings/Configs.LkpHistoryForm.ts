namespace EMR.Configs {
    export interface LkpHistoryForm {
        HistoryName: Serenity.StringEditor;
    }

    export class LkpHistoryForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.LkpHistory';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LkpHistoryForm.init)  {
                LkpHistoryForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(LkpHistoryForm, [
                    'HistoryName', w0
                ]);
            }
        }
    }
}

