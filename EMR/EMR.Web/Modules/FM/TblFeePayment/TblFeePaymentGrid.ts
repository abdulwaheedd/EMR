
namespace EMR.FM {

    @Serenity.Decorators.registerClass()
    export class TblFeePaymentGrid extends Serenity.EntityGrid<TblFeePaymentRow, any> {
        protected getColumnsKey() { return 'FM.TblFeePayment'; }
        protected getDialogType() { return TblFeePaymentDialog; }
        protected getIdProperty() { return TblFeePaymentRow.idProperty; }
        protected getLocalTextPrefix() { return TblFeePaymentRow.localTextPrefix; }
        protected getService() { return TblFeePaymentService.baseUrl; }


        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "column-picker-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            return buttons;
        }

        protected createToolbar(): void {
        }
        protected createQuickSearchInput(): void {
        }
    }
}