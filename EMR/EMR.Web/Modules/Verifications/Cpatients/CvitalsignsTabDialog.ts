/// <reference path="../cvitalsigns/cvitalsignsdialog.ts" />


namespace EMR.Verifications {

    @Serenity.Decorators.registerClass()
    export class CvitalsignsTabDialog extends CvitalsignsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.Mrid, true);
        }
    }
}