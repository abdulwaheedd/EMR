/// <reference path="../vscheduling/vschedulingdialog.ts" />

namespace EMR.OPD {

    @Serenity.Decorators.registerClass()
    export class SchedulesTabDialog extends VschedulingDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.VisitId, true);
        }
    }
}