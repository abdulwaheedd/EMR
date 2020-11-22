/// <reference path="../patattendants/patattendantsdialog.ts" />

namespace EMR.Register {

    @Serenity.Decorators.registerClass()
    export class PatAttendantsTabDialog extends PatAttendantsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.VisitId, true);
        }
    }
}