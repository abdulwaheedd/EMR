/// <reference path="../tbloperations/tbloperationsdialog.ts" />
namespace EMR.Regs {

    @Serenity.Decorators.registerClass()
    export class AdmissionsOperationsDialog extends TblOperationsDialog{

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.AdId, true);
        }
    }
}