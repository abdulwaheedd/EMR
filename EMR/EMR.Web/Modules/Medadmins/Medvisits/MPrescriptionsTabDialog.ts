/// <reference path="../mprescriptions/mprescriptionsdialog.ts" />

namespace EMR.Medadmins {

    @Serenity.Decorators.registerClass()
    export class MPrescriptionsTabDialog extends MPrescriptionsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.VisitId, true);
        }
    }
}