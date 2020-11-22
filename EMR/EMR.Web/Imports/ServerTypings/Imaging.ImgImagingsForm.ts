namespace EMR.Imaging {
    export interface ImgImagingsForm {
        VisitId: Serenity.StringEditor;
        ImagingId: Serenity.LookupEditor;
        TestImage: Serenity.MultipleImageUploadEditor;
        Note: Serenity.HtmlReportContentEditor;
    }

    export class ImgImagingsForm extends Serenity.PrefixedContext {
        static formKey = 'Imaging.ImgImagings';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ImgImagingsForm.init)  {
                ImgImagingsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.MultipleImageUploadEditor;
                var w3 = s.HtmlReportContentEditor;

                Q.initFormType(ImgImagingsForm, [
                    'VisitId', w0,
                    'ImagingId', w1,
                    'TestImage', w2,
                    'Note', w3
                ]);
            }
        }
    }
}

