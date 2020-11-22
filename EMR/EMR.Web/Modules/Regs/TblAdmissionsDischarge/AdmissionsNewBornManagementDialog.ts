/// <reference path="../tblnewbornmanagement/tblnewbornmanagementdialog.ts" />

namespace EMR.Regs {

    @Serenity.Decorators.registerClass()
    export class AdmissionsNewBornManagementDialog extends TblNewBornManagementDialog{

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.AdId, true);
        }
    }
}