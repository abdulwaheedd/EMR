
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblMaritalStatusDialog extends Serenity.EntityDialog<TblMaritalStatusRow, any> {
        protected getFormKey() { return TblMaritalStatusForm.formKey; }
        protected getIdProperty() { return TblMaritalStatusRow.idProperty; }
        protected getLocalTextPrefix() { return TblMaritalStatusRow.localTextPrefix; }
        protected getNameProperty() { return TblMaritalStatusRow.nameProperty; }
        protected getService() { return TblMaritalStatusService.baseUrl; }

        protected form = new TblMaritalStatusForm(this.idPrefix);

    }
}