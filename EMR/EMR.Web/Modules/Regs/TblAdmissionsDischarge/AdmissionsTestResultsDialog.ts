/// <reference path="../tbltestexaminations/tbltestexaminationsdialog.ts" />

namespace EMR.Regs {

    @Serenity.Decorators.registerClass()
    export class AdmissionsTestResultsDialog extends TblTestExaminationsDialog{

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.AdId, true);
        }
    }
}