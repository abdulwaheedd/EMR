/// <reference path="../bloodtransfusions/bloodtransfusionsdialog.ts" />

namespace EMR.Medadmins {

    @Serenity.Decorators.registerClass()
    export class BloodTransfusionsTabDialog extends BloodTransfusionsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.VisitId, true);
        }
    }
}