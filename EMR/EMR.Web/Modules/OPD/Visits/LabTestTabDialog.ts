/// <reference path="../labtest/labtestdialog.ts" />

namespace EMR.OPD {

    @Serenity.Decorators.registerClass()
    export class LabTestTabDialog extends LabTestDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.VisitId, true);
        }
    }
}