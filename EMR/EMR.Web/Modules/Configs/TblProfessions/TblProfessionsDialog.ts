
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblProfessionsDialog extends Serenity.EntityDialog<TblProfessionsRow, any> {
        protected getFormKey() { return TblProfessionsForm.formKey; }
        protected getIdProperty() { return TblProfessionsRow.idProperty; }
        protected getLocalTextPrefix() { return TblProfessionsRow.localTextPrefix; }
        protected getNameProperty() { return TblProfessionsRow.nameProperty; }
        protected getService() { return TblProfessionsService.baseUrl; }

        protected form = new TblProfessionsForm(this.idPrefix);

    }
}