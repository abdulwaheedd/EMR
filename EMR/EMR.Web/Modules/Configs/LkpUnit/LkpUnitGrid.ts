
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class LkpUnitGrid extends Serenity.EntityGrid<LkpUnitRow, any> {
        protected getColumnsKey() { return 'Configs.LkpUnit'; }
        protected getDialogType() { return LkpUnitDialog; }
        protected getIdProperty() { return LkpUnitRow.idProperty; }
        protected getLocalTextPrefix() { return LkpUnitRow.localTextPrefix; }
        protected getService() { return LkpUnitService.baseUrl; }

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