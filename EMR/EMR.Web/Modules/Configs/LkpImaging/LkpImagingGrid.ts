
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class LkpImagingGrid extends Serenity.EntityGrid<LkpImagingRow, any> {
        protected getColumnsKey() { return 'Configs.LkpImaging'; }
        protected getDialogType() { return LkpImagingDialog; }
        protected getIdProperty() { return LkpImagingRow.idProperty; }
        protected getLocalTextPrefix() { return LkpImagingRow.localTextPrefix; }
        protected getService() { return LkpImagingService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "column-picker-button"), 1);
            return buttons;
        }
    }
}