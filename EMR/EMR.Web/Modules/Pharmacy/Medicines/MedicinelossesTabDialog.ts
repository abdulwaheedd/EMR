/// <reference path="../medicinelosses/medicinelossesdialog.ts" />

namespace EMR.Pharmacy {

    @Serenity.Decorators.registerClass()
    export class MedicinelossesTabDialog extends MedicinelossesDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.MedicineId, true);
        }
    }
}