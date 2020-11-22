/// <reference path="../labvisits/labvisitsdialog.ts" />
namespace EMR.LabTest {

    @Serenity.Decorators.registerClass()
    export class LabvisitsTabDialog extends LabvisitsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.Mrid, true);
        }
    }
}