
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblCaseTypesDialog extends Serenity.EntityDialog<TblCaseTypesRow, any> {
        protected getFormKey() { return TblCaseTypesForm.formKey; }
        protected getIdProperty() { return TblCaseTypesRow.idProperty; }
        protected getLocalTextPrefix() { return TblCaseTypesRow.localTextPrefix; }
        protected getNameProperty() { return TblCaseTypesRow.nameProperty; }
        protected getService() { return TblCaseTypesService.baseUrl; }

        protected form = new TblCaseTypesForm(this.idPrefix);

    }
}