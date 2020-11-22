/// <reference path="../cmedprescriptions/cmedprescriptionsdialog.ts" />


namespace EMR.Verifications {

    @Serenity.Decorators.registerClass()
    export class CmedprescriptionsTabDialog extends CmedprescriptionsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.Mrid, true);
        }
    }
}