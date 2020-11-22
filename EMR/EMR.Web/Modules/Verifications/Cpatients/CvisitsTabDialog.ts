/// <reference path="../cvisits/cvisitsdialog.ts" />


namespace EMR.Verifications {

    @Serenity.Decorators.registerClass()
    export class CvisitsTabDialog extends CvisitsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.Mrid, true);
        }
    }
}