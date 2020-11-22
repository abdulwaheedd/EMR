/// <reference path="../vitalvisits/vitalvisitsdialog.ts" />

namespace EMR.VitalSigns {

    @Serenity.Decorators.registerClass()
    export class VitalvisitsTabDialog extends VitalvisitsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.Mrid, true);
        }
    }
}