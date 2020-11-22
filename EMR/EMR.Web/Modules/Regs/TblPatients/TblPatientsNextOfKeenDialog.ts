/// <reference path="../tblpatientnextofkeen/tblpatientnextofkeendialog.ts" />

namespace EMR.Regs {

    @Serenity.Decorators.registerClass()
    export class TblPatientsNextOfKeenDialog extends TblPatientNextOfKeenDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.Mrid, true);
        }
    }
}