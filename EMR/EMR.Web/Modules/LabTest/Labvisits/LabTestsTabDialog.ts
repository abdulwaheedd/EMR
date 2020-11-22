/// <reference path="../labtests/labtestsdialog.ts" />
namespace EMR.LabTest {

    @Serenity.Decorators.registerClass()
    export class LabTestsTabDialog extends LabTestsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.VisitId, true);
        }
    }
}