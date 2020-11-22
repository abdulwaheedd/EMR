namespace EMR.Medadmins {
    export interface VisitsmedicineForm {
        VisitId: Serenity.StringEditor;
        Mrid: Serenity.LookupEditor;
        Medicine: Serenity.StringEditor;
    }

    export class VisitsmedicineForm extends Serenity.PrefixedContext {
        static formKey = 'Medadmins.Visitsmedicine';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VisitsmedicineForm.init)  {
                VisitsmedicineForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(VisitsmedicineForm, [
                    'VisitId', w0,
                    'Mrid', w1,
                    'Medicine', w0
                ]);
            }
        }
    }
}

