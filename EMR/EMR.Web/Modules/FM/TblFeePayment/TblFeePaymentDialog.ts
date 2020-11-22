
namespace EMR.FM {

    @Serenity.Decorators.registerClass()
    export class TblFeePaymentDialog extends Serenity.EntityDialog<TblFeePaymentRow, any> {
        protected getFormKey() { return TblFeePaymentForm.formKey; }
        protected getIdProperty() { return TblFeePaymentRow.idProperty; }
        protected getLocalTextPrefix() { return TblFeePaymentRow.localTextPrefix; }
        protected getService() { return TblFeePaymentService.baseUrl; }

        protected form = new TblFeePaymentForm(this.idPrefix);

    }
}