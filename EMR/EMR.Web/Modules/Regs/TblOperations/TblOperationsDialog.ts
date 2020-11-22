
namespace EMR.Regs {

    @Serenity.Decorators.registerClass()
    export class TblOperationsDialog extends Serenity.EntityDialog<TblOperationsRow, any> {
        protected getFormKey() { return TblOperationsForm.formKey; }
        protected getIdProperty() { return TblOperationsRow.idProperty; }
        protected getLocalTextPrefix() { return TblOperationsRow.localTextPrefix; }
        protected getNameProperty() { return TblOperationsRow.nameProperty; }
        protected getService() { return TblOperationsService.baseUrl; }

        protected form = new TblOperationsForm(this.idPrefix);

        constructor() {
            super();
        }
    }
}