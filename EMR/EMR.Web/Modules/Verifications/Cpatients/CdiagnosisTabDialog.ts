/// <reference path="../cdiagnosis/cdiagnosisdialog.ts" />


namespace EMR.Verifications {

    @Serenity.Decorators.registerClass()
    export class CdiagnosisTabDialog extends CdiagnosisDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.Mrid, true);
        }
    }
}