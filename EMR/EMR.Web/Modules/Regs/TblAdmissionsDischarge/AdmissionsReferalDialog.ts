/// <reference path="../tblreferral/tblreferraldialog.ts" />

namespace EMR.Regs {

    @Serenity.Decorators.registerClass()
    export class AdmissionsReferalDialog extends TblReferralDialog{

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.AdId, true);
        }
    }
}