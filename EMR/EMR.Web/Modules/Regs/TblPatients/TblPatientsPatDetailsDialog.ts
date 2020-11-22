/// <reference path="../tblpatdetails/tblpatdetailsdialog.ts" />
namespace EMR.Regs {

    @Serenity.Decorators.registerClass()
    export class TblPatientsPatDetailsDialog extends TblPatDetailsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.Mrid, true);
        }
    }
}