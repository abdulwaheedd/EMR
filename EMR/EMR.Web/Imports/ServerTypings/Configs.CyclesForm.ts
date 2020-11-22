namespace EMR.Configs {
    export interface CyclesForm {
        Cyclename: Serenity.StringEditor;
        Cycledescription: Serenity.StringEditor;
    }

    export class CyclesForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.Cycles';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CyclesForm.init)  {
                CyclesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CyclesForm, [
                    'Cyclename', w0,
                    'Cycledescription', w0
                ]);
            }
        }
    }
}

