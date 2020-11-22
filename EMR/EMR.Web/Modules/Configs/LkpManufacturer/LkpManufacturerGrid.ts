
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class LkpManufacturerGrid extends Serenity.EntityGrid<LkpManufacturerRow, any> {
        protected getColumnsKey() { return 'Configs.LkpManufacturer'; }
        protected getDialogType() { return LkpManufacturerDialog; }
        protected getIdProperty() { return LkpManufacturerRow.idProperty; }
        protected getLocalTextPrefix() { return LkpManufacturerRow.localTextPrefix; }
        protected getService() { return LkpManufacturerService.baseUrl; }

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