
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblNbResultGrid extends Serenity.EntityGrid<TblNbResultRow, any> {
        protected getColumnsKey() { return 'Configs.TblNbResult'; }
        protected getDialogType() { return TblNbResultDialog; }
        protected getIdProperty() { return TblNbResultRow.idProperty; }
        protected getLocalTextPrefix() { return TblNbResultRow.localTextPrefix; }
        protected getService() { return TblNbResultService.baseUrl; }

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