namespace EMR.Configs {
    export interface LkpImagingForm {
        ImagingName: Serenity.StringEditor;
        Note: Serenity.HtmlNoteContentEditor;
    }

    export class LkpImagingForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.LkpImaging';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LkpImagingForm.init)  {
                LkpImagingForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.HtmlNoteContentEditor;

                Q.initFormType(LkpImagingForm, [
                    'ImagingName', w0,
                    'Note', w1
                ]);
            }
        }
    }
}

