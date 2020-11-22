/// <reference path="../cphysicalexamination/cphysicalexaminationdialog.ts" />

namespace EMR.Verifications {

    @Serenity.Decorators.registerClass()
    export class CphysicalexaminationTabDialog extends CphysicalexaminationDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.Mrid, true);
        }
    }
}