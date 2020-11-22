/// <reference path="../medvisits/medvisitsdialog.ts" />


namespace EMR.Medadmins {

    @Serenity.Decorators.registerClass()
    export class MedvisitsTabDialog extends MedvisitsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.Mrid, true);
        }
    }
}