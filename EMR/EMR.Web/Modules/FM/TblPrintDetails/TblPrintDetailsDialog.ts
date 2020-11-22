
namespace EMR.FM {

    @Serenity.Decorators.registerClass()
    export class TblPrintDetailsDialog extends Serenity.EntityDialog<TblPrintDetailsRow, any> {
        protected getFormKey() { return TblPrintDetailsForm.formKey; }
        protected getIdProperty() { return TblPrintDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return TblPrintDetailsRow.localTextPrefix; }
        protected getNameProperty() { return TblPrintDetailsRow.nameProperty; }
        protected getService() { return TblPrintDetailsService.baseUrl; }

        protected form = new TblPrintDetailsForm(this.idPrefix);

    }
}