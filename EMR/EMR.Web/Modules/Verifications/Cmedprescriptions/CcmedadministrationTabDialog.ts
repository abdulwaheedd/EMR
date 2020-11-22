/// <reference path="../cmedadministration/cmedadministrationdialog.ts" />


namespace EMR.Verifications {

    @Serenity.Decorators.registerClass()
    export class CcmedadministrationTabDialog extends CmedadministrationDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.OrderId, true);
        }
    }
}