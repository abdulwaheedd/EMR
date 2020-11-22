/// <reference path="../scheduling/schedulingdialog.ts" />

namespace EMR.VitalSigns {

    @Serenity.Decorators.registerClass()
    export class SchedulingTabDialog extends SchedulingDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.VisitId, true);
        }
    }
}