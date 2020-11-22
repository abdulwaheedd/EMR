/// <reference path="../opdmedadministration/opdmedadministrationdialog.ts" />

namespace EMR.OPD {

    @Serenity.Decorators.registerClass()
    export class OpdMedadministrationTabDialog extends OpdMedadministrationDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.OrderId, true);
        }
    }
}