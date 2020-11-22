namespace EMR.OPD {
    export interface ImagingsForm {
        VisitId: Serenity.StringEditor;
        ImagingId: Serenity.LookupEditor;
        TestImage: Serenity.MultipleImageUploadEditor;
        Note: Serenity.HtmlReportContentEditor;
    }

    export class ImagingsForm extends Serenity.PrefixedContext {
        static formKey = 'OPD.Imagings';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ImagingsForm.init)  {
                ImagingsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.MultipleImageUploadEditor;
                var w3 = s.HtmlReportContentEditor;

                Q.initFormType(ImagingsForm, [
                    'VisitId', w0,
                    'ImagingId', w1,
                    'TestImage', w2,
                    'Note', w3
                ]);
            }
        }
    }
}

