/// <reference path="../cmedadministration/cmedadministrationgrid.ts" />

namespace EMR.Verifications {

    @Serenity.Decorators.registerClass()
    export class CmedadministrationTabDialog extends CmedadministrationDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.OrderId, true);
        }
    }
}