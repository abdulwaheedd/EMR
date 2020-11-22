/// <reference path="../vvitalsigns/vvitalsignsdialog.ts" />

namespace EMR.VitalSigns {

    @Serenity.Decorators.registerClass()
    export class VVitalSignsTabDialog extends VVitalSignsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.VisitId, true);
        }
    }
}