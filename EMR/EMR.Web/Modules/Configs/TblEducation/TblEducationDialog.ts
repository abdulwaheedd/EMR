
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblEducationDialog extends Serenity.EntityDialog<TblEducationRow, any> {
        protected getFormKey() { return TblEducationForm.formKey; }
        protected getIdProperty() { return TblEducationRow.idProperty; }
        protected getLocalTextPrefix() { return TblEducationRow.localTextPrefix; }
        protected getNameProperty() { return TblEducationRow.nameProperty; }
        protected getService() { return TblEducationService.baseUrl; }

        protected form = new TblEducationForm(this.idPrefix);

    }
}