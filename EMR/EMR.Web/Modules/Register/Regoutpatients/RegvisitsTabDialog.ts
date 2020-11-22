/// <reference path="../regvisits/regvisitsdialog.ts" />

namespace EMR.Register {

    @Serenity.Decorators.registerClass()
    export class RegvisitsTabDialog extends RegvisitsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.Mrid, true);
        }
    }
}