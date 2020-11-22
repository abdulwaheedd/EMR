/// <reference path="../cimagings/cimagingsdialog.ts" />


namespace EMR.Verifications {

    @Serenity.Decorators.registerClass()
    export class CimagingsTabDialog extends CimagingsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.Mrid, true);
        }
    }
}