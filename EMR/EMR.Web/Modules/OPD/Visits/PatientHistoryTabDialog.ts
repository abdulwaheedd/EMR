/// <reference path="../patienthistory/patienthistorydialog.ts" />

namespace EMR.OPD {

    @Serenity.Decorators.registerClass()
    export class PatientHistoryTabDialog extends PatientHistoryDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.VisitId, true);
        }
    }
}