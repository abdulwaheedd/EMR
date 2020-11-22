/// <reference path="../cpatienthistory/cpatienthistorydialog.ts" />

namespace EMR.Verifications {

    @Serenity.Decorators.registerClass()
    export class CpatienthistoryTabDialog extends CpatienthistoryDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.Mrid, true);
        }
    }
}