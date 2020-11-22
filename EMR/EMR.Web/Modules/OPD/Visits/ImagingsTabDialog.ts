/// <reference path="../imagings/imagingsdialog.ts" />

namespace EMR.OPD {

    @Serenity.Decorators.registerClass()
    export class ImagingsTabDialog extends ImagingsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.VisitId, true);
        }
    }
}