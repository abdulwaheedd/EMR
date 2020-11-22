namespace EMR.Configs {
    export interface LkpUnitForm {
        UnitName: Serenity.StringEditor;
    }

    export class LkpUnitForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.LkpUnit';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LkpUnitForm.init)  {
                LkpUnitForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(LkpUnitForm, [
                    'UnitName', w0
                ]);
            }
        }
    }
}

