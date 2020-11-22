
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class LkpVendorGrid extends Serenity.EntityGrid<LkpVendorRow, any> {
        protected getColumnsKey() { return 'Configs.LkpVendor'; }
        protected getDialogType() { return LkpVendorDialog; }
        protected getIdProperty() { return LkpVendorRow.idProperty; }
        protected getLocalTextPrefix() { return LkpVendorRow.localTextPrefix; }
        protected getService() { return LkpVendorService.baseUrl; }

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