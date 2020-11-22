namespace EMR.OPD {
    export interface PatientHistoryForm {
        VisitId: Serenity.StringEditor;
        HistoryId: Serenity.LookupEditor;
        Note: Serenity.HtmlNoteContentEditor;
    }

    export class PatientHistoryForm extends Serenity.PrefixedContext {
        static formKey = 'OPD.PatientHistory';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PatientHistoryForm.init)  {
                PatientHistoryForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.HtmlNoteContentEditor;

                Q.initFormType(PatientHistoryForm, [
                    'VisitId', w0,
                    'HistoryId', w1,
                    'Note', w2
                ]);
            }
        }
    }
}

