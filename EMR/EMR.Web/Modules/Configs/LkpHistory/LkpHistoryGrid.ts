
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class LkpHistoryGrid extends Serenity.EntityGrid<LkpHistoryRow, any> {
        protected getColumnsKey() { return 'Configs.LkpHistory'; }
        protected getDialogType() { return LkpHistoryDialog; }
        protected getIdProperty() { return LkpHistoryRow.idProperty; }
        protected getLocalTextPrefix() { return LkpHistoryRow.localTextPrefix; }
        protected getService() { return LkpHistoryService.baseUrl; }

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