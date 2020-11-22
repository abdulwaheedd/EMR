/// <reference path="../vitalsigns/vitalsignsdialog.ts" />

namespace EMR.OPD {

    @Serenity.Decorators.registerClass()
    export class VitalSignsTabDialog extends VitalSignsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.VisitId, true);
        }
    }
}