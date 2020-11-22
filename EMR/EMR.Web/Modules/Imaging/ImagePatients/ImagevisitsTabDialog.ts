/// <reference path="../imagevisits/imagevisitsdialog.ts" />

namespace EMR.Imaging {

    @Serenity.Decorators.registerClass()
    export class ImagevisitsTabDialog extends ImagevisitsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.Mrid, true);
        }
    }
}