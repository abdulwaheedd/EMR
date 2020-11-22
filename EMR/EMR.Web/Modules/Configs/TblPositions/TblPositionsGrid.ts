
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblPositionsGrid extends Serenity.EntityGrid<TblPositionsRow, any> {
        protected getColumnsKey() { return 'Configs.TblPositions'; }
        protected getDialogType() { return TblPositionsDialog; }
        protected getIdProperty() { return TblPositionsRow.idProperty; }
        protected getLocalTextPrefix() { return TblPositionsRow.localTextPrefix; }
        protected getService() { return TblPositionsService.baseUrl; }

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