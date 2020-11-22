/// <reference path="../clabtests/clabtestsdialog.ts" />


namespace EMR.Verifications {

    @Serenity.Decorators.registerClass()
    export class ClabtestsTabDialog extends ClabtestsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.Mrid, true);
        }
    }
}