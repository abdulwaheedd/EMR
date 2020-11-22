/// <reference path="../medadminpatients/medadminpatientsdialog.ts" />

namespace EMR.Medadmins {

    @Serenity.Decorators.registerClass()
    export class MMedadministrationTabDialog extends MedadministrationDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.OrderId, true);
        }
    }
}