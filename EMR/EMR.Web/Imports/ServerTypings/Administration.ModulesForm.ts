namespace EMR.Administration {
    export interface ModulesForm {
        ModuleName: Serenity.StringEditor;
        ModuleDescription: Serenity.StringEditor;
    }

    export class ModulesForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Modules';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ModulesForm.init)  {
                ModulesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ModulesForm, [
                    'ModuleName', w0,
                    'ModuleDescription', w0
                ]);
            }
        }
    }
}

