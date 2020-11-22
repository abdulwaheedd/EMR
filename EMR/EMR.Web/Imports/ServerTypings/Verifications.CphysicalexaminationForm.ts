namespace EMR.Verifications {
    export interface CphysicalexaminationForm {
        Mrid: Serenity.StringEditor;
        VisitId: Serenity.StringEditor;
        DateOfVisit: Serenity.DateEditor;
        SDateOfVisit: Serenity.StringEditor;
        GroupId: Serenity.LookupEditor;
        PhysExamId: Serenity.LookupEditor;
        Note: Serenity.HtmlNoteContentEditor;
    }

    export class CphysicalexaminationForm extends Serenity.PrefixedContext {
        static formKey = 'Verifications.Cphysicalexamination';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CphysicalexaminationForm.init)  {
                CphysicalexaminationForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.LookupEditor;
                var w3 = s.HtmlNoteContentEditor;

                Q.initFormType(CphysicalexaminationForm, [
                    'Mrid', w0,
                    'VisitId', w0,
                    'DateOfVisit', w1,
                    'SDateOfVisit', w0,
                    'GroupId', w2,
                    'PhysExamId', w2,
                    'Note', w3
                ]);
            }
        }
    }
}

