
namespace EMR.Regs {

    @Serenity.Decorators.registerClass()
    export class TblPatientsAdmissionsDischargeDialog extends TblAdmissionsDischargeDialog{

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.Mrid, true);
        }
    }
}