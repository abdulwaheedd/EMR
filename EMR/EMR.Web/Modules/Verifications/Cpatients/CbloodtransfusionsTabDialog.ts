/// <reference path="../cbloodtransfusions/cbloodtransfusionsdialog.ts" />

namespace EMR.Verifications {

    @Serenity.Decorators.registerClass()
    export class CbloodtransfusionsTabDialog extends CbloodtransfusionsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.Mrid, true);
        }
    }
}