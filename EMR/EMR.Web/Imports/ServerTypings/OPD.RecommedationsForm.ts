namespace EMR.OPD {
    export interface RecommedationsForm {
        VisitId: Serenity.StringEditor;
        RecomId: Serenity.LookupEditor;
        Note: Serenity.HtmlNoteContentEditor;
    }

    export class RecommedationsForm extends Serenity.PrefixedContext {
        static formKey = 'OPD.Recommedations';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RecommedationsForm.init)  {
                RecommedationsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.HtmlNoteContentEditor;

                Q.initFormType(RecommedationsForm, [
                    'VisitId', w0,
                    'RecomId', w1,
                    'Note', w2
                ]);
            }
        }
    }
}

