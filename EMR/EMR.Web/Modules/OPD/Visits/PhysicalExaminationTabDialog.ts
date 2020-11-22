/// <reference path="../physicalexamination/physicalexaminationdialog.ts" />
namespace EMR.OPD {

    @Serenity.Decorators.registerClass()
    export class PhysicalExaminationTabDialog extends PhysicalExaminationDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.VisitId, true);
        }
    }
}