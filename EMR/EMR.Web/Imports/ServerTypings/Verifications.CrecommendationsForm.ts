namespace EMR.Verifications {
    export interface CrecommendationsForm {
        Mrid: Serenity.StringEditor;
        VisitId: Serenity.StringEditor;
        DateOfVisit: Serenity.DateEditor;
        SDateOfVisit: Serenity.StringEditor;
        RecomId: Serenity.LookupEditor;
        Note: Serenity.HtmlNoteContentEditor;
    }

    export class CrecommendationsForm extends Serenity.PrefixedContext {
        static formKey = 'Verifications.Crecommendations';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CrecommendationsForm.init)  {
                CrecommendationsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.LookupEditor;
                var w3 = s.HtmlNoteContentEditor;

                Q.initFormType(CrecommendationsForm, [
                    'Mrid', w0,
                    'VisitId', w0,
                    'DateOfVisit', w1,
                    'SDateOfVisit', w0,
                    'RecomId', w2,
                    'Note', w3
                ]);
            }
        }
    }
}

