/// <reference path="../visits/visitsdialog.ts" />

namespace EMR.OPD {

    @Serenity.Decorators.registerClass()
    export class VisitsTabDialog extends VisitsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.Mrid, true);
        }
    }
}