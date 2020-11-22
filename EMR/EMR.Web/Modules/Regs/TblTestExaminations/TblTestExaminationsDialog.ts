
namespace EMR.Regs {

    @Serenity.Decorators.registerClass()
    export class TblTestExaminationsDialog extends Serenity.EntityDialog<TblTestExaminationsRow, any> {
        protected getFormKey() { return TblTestExaminationsForm.formKey; }
        protected getIdProperty() { return TblTestExaminationsRow.idProperty; }
        protected getLocalTextPrefix() { return TblTestExaminationsRow.localTextPrefix; }
        protected getNameProperty() { return TblTestExaminationsRow.nameProperty; }
        protected getService() { return TblTestExaminationsService.baseUrl; }

        protected form = new TblTestExaminationsForm(this.idPrefix);

    }
}