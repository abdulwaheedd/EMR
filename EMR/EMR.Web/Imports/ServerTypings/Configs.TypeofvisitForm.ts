namespace EMR.Configs {
    export interface TypeofvisitForm {
        TypeOfVisit: Serenity.StringEditor;
    }

    export class TypeofvisitForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.Typeofvisit';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TypeofvisitForm.init)  {
                TypeofvisitForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TypeofvisitForm, [
                    'TypeOfVisit', w0
                ]);
            }
        }
    }
}

