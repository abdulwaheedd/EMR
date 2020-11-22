/// <reference path="../tblfeepayment/tblfeepaymentdialog.ts" />

namespace EMR.FM {

    @Serenity.Decorators.registerClass()
    export class TblFeePaymentTabDialog extends TblFeePaymentDialog{

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.Mrid, true);
        }
    }
}