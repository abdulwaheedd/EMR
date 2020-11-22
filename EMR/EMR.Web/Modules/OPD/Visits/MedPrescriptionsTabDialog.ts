/// <reference path="../../pharmacy/medprescriptions/medprescriptionsdialog.ts" />

namespace EMR.OPD {

    @Serenity.Decorators.registerClass()
    export class MedPrescriptionsTabDialog extends Pharmacy.MedPrescriptionsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.VisitId, true);
        }
    }
}