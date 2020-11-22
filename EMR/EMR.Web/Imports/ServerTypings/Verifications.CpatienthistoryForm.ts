namespace EMR.Verifications {
    export interface CpatienthistoryForm {
        Mrid: Serenity.StringEditor;
        VisitId: Serenity.StringEditor;
        DateOfVisit: Serenity.DateEditor;
        SDateOfVisit: Serenity.StringEditor;
        HistoryId: Serenity.LookupEditor;
        Note: Serenity.HtmlNoteContentEditor;
    }

    export class CpatienthistoryForm extends Serenity.PrefixedContext {
        static formKey = 'Verifications.Cpatienthistory';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CpatienthistoryForm.init)  {
                CpatienthistoryForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.LookupEditor;
                var w3 = s.HtmlNoteContentEditor;

                Q.initFormType(CpatienthistoryForm, [
                    'Mrid', w0,
                    'VisitId', w0,
                    'DateOfVisit', w1,
                    'SDateOfVisit', w0,
                    'HistoryId', w2,
                    'Note', w3
                ]);
            }
        }
    }
}

