
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblChildGrid extends Serenity.EntityGrid<TblChildRow, any> {
        protected getColumnsKey() { return 'Configs.TblChild'; }
        protected getDialogType() { return TblChildDialog; }
        protected getIdProperty() { return TblChildRow.idProperty; }
        protected getLocalTextPrefix() { return TblChildRow.localTextPrefix; }
        protected getService() { return TblChildService.baseUrl; }

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