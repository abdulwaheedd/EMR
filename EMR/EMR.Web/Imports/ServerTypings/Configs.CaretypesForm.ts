namespace EMR.Configs {
    export interface CaretypesForm {
        Caretype: Serenity.StringEditor;
    }

    export class CaretypesForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.Caretypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CaretypesForm.init)  {
                CaretypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CaretypesForm, [
                    'Caretype', w0
                ]);
            }
        }
    }
}

