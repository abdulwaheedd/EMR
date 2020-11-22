/// <reference path="../cyclevisits/cyclevisitsdialog.ts" />

namespace EMR.VitalSigns {

    @Serenity.Decorators.registerClass()
    export class CyclevisitsTabDialog extends CyclevisitsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.ScheduleId, true);
        }
    }
}