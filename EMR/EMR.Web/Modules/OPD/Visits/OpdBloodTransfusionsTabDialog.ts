/// <reference path="../opdbloodtransfusions/opdbloodtransfusionsdialog.ts" />

namespace EMR.OPD {

    @Serenity.Decorators.registerClass()
    export class OpdBloodTransfusionsTabDialog extends OpdBloodTransfusionsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.VisitId, true);
        }
    }
}