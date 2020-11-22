/// <reference path="../medprescriptions/medprescriptionsdialog.ts" />

namespace EMR.Pharmacy {

    @Serenity.Decorators.registerClass()
    export class MedPrescriptionsTabDialog extends MedPrescriptionsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.VisitId, true);
        }
    }
}