/// <reference path="../prescriptions/prescriptionsdialog.ts" />
namespace EMR.OPD {

    @Serenity.Decorators.registerClass()
    export class PrescriptionsTabDialog extends PrescriptionsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.VisitId, true);
        }
    }
}