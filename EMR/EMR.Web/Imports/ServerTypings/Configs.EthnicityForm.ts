namespace EMR.Configs {
    export interface EthnicityForm {
        EthnicityName: Serenity.StringEditor;
    }

    export class EthnicityForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.Ethnicity';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EthnicityForm.init)  {
                EthnicityForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(EthnicityForm, [
                    'EthnicityName', w0
                ]);
            }
        }
    }
}

