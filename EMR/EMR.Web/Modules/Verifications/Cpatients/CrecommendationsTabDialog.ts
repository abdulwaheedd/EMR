/// <reference path="../crecommendations/crecommendationsdialog.ts" />

namespace EMR.Verifications {

    @Serenity.Decorators.registerClass()
    export class CrecommendationsTabDialog extends CrecommendationsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.Mrid, true);
        }
    }
}