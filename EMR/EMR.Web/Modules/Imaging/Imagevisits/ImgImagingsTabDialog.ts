/// <reference path="../imgimagings/imgimagingsdialog.ts" />
namespace EMR.Imaging {

    @Serenity.Decorators.registerClass()
    export class ImgImagingsTabDialog extends ImgImagingsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.VisitId, true);
        }
    }
}