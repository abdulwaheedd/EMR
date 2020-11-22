namespace EMR.OPD {
    export interface PhysicalExaminationForm {
        VisitId: Serenity.StringEditor;
        GroupId: Serenity.LookupEditor;
        PhysExamId: Serenity.LookupEditor;
        Note: Serenity.HtmlNoteContentEditor;
    }

    export class PhysicalExaminationForm extends Serenity.PrefixedContext {
        static formKey = 'OPD.PhysicalExamination';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PhysicalExaminationForm.init)  {
                PhysicalExaminationForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.HtmlNoteContentEditor;

                Q.initFormType(PhysicalExaminationForm, [
                    'VisitId', w0,
                    'GroupId', w1,
                    'PhysExamId', w1,
                    'Note', w2
                ]);
            }
        }
    }
}

