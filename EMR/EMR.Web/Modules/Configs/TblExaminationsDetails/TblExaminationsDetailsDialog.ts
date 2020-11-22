
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblExaminationsDetailsDialog extends Serenity.EntityDialog<TblExaminationsDetailsRow, any> {
        protected getFormKey() { return TblExaminationsDetailsForm.formKey; }
        protected getIdProperty() { return TblExaminationsDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return TblExaminationsDetailsRow.localTextPrefix; }
        protected getNameProperty() { return TblExaminationsDetailsRow.nameProperty; }
        protected getService() { return TblExaminationsDetailsService.baseUrl; }

        protected form = new TblExaminationsDetailsForm(this.idPrefix);

    }
}