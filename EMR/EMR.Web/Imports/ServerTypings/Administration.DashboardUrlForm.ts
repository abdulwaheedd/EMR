namespace EMR.Administration {
    export interface DashboardUrlForm {
        Url: Serenity.StringEditor;
        Active: Serenity.BooleanEditor;
    }

    export class DashboardUrlForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.DashboardUrl';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DashboardUrlForm.init)  {
                DashboardUrlForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;

                Q.initFormType(DashboardUrlForm, [
                    'Url', w0,
                    'Active', w1
                ]);
            }
        }
    }
}

