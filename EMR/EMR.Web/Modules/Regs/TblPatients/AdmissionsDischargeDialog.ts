/// <reference path="../tbldischarge/tbldischargedialog.ts" />
namespace EMR.Regs {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.maximizable()
    @Serenity.Decorators.registerClass()
    export class AdmissionsDischargeDialog extends TblDischargeDialog{

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.Mrid, true);
        }
    }
}