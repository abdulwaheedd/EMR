namespace EMR.Register {
    export interface PatAttendantsForm {
        VisitId: Serenity.StringEditor;
        AttendantName: Serenity.StringEditor;
        FatherName: Serenity.StringEditor;
        GenderId: Serenity.LookupEditor;
        Phone: Serenity.MaskedEditor;
        RelationType: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
    }

    export class PatAttendantsForm extends Serenity.PrefixedContext {
        static formKey = 'Register.PatAttendants';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PatAttendantsForm.init)  {
                PatAttendantsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.MaskedEditor;

                Q.initFormType(PatAttendantsForm, [
                    'VisitId', w0,
                    'AttendantName', w0,
                    'FatherName', w0,
                    'GenderId', w1,
                    'Phone', w2,
                    'RelationType', w1,
                    'Address', w0
                ]);
            }
        }
    }
}

