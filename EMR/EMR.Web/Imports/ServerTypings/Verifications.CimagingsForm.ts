namespace EMR.Verifications {
    export interface CimagingsForm {
        Mrid: Serenity.StringEditor;
        VisitId: Serenity.StringEditor;
        ImagingId: Serenity.LookupEditor;
        TestImage: Serenity.MultipleImageUploadEditor;
        Note: Serenity.HtmlReportContentEditor;
    }

    export class CimagingsForm extends Serenity.PrefixedContext {
        static formKey = 'Verifications.Cimagings';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CimagingsForm.init)  {
                CimagingsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.MultipleImageUploadEditor;
                var w3 = s.HtmlReportContentEditor;

                Q.initFormType(CimagingsForm, [
                    'Mrid', w0,
                    'VisitId', w0,
                    'ImagingId', w1,
                    'TestImage', w2,
                    'Note', w3
                ]);
            }
        }
    }
}

