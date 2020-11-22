namespace EMR.Configs {
    export interface LkpPhysExamsForm {
        GroupId: Serenity.LookupEditor;
        PhysExamName: Serenity.StringEditor;
    }

    export class LkpPhysExamsForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.LkpPhysExams';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LkpPhysExamsForm.init)  {
                LkpPhysExamsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(LkpPhysExamsForm, [
                    'GroupId', w0,
                    'PhysExamName', w1
                ]);
            }
        }
    }
}

