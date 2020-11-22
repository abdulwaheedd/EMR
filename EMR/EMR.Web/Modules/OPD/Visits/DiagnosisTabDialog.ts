/// <reference path="../diagnosis/diagnosisdialog.ts" />

namespace EMR.OPD {

    @Serenity.Decorators.registerClass()
    export class DiagnosisTabDialog extends DiagnosisDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.VisitId, true);
        }
    }
}