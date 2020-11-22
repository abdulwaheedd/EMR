
namespace EMR.FM {

    @Serenity.Decorators.registerClass()
    export class TblPrintDetailsGrid extends Serenity.EntityGrid<TblPrintDetailsRow, any> {
        protected getColumnsKey() { return 'FM.TblPrintDetails'; }
        protected getDialogType() { return TblPrintDetailsDialog; }
        protected getIdProperty() { return TblPrintDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return TblPrintDetailsRow.localTextPrefix; }
        protected getService() { return TblPrintDetailsService.baseUrl; }

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