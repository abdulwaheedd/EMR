/// <reference path="../recommedations/recommedationsdialog.ts" />

namespace EMR.OPD {

    @Serenity.Decorators.registerClass()
    export class RecommedationsTabDialog extends RecommedationsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.VisitId, true);
        }
    }
}