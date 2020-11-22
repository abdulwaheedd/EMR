
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblNbstatusGrid extends Serenity.EntityGrid<TblNbstatusRow, any> {
        protected getColumnsKey() { return 'Configs.TblNbstatus'; }
        protected getDialogType() { return TblNbstatusDialog; }
        protected getIdProperty() { return TblNbstatusRow.idProperty; }
        protected getLocalTextPrefix() { return TblNbstatusRow.localTextPrefix; }
        protected getService() { return TblNbstatusService.baseUrl; }

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