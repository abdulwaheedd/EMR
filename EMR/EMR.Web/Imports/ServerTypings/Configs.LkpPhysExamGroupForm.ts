namespace EMR.Configs {
    export interface LkpPhysExamGroupForm {
        GroupName: Serenity.StringEditor;
    }

    export class LkpPhysExamGroupForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.LkpPhysExamGroup';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LkpPhysExamGroupForm.init)  {
                LkpPhysExamGroupForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(LkpPhysExamGroupForm, [
                    'GroupName', w0
                ]);
            }
        }
    }
}

