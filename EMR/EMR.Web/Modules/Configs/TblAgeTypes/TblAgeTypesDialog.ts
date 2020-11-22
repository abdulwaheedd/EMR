
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblAgeTypesDialog extends Serenity.EntityDialog<TblAgeTypesRow, any> {
        protected getFormKey() { return TblAgeTypesForm.formKey; }
        protected getIdProperty() { return TblAgeTypesRow.idProperty; }
        protected getLocalTextPrefix() { return TblAgeTypesRow.localTextPrefix; }
        protected getNameProperty() { return TblAgeTypesRow.nameProperty; }
        protected getService() { return TblAgeTypesService.baseUrl; }

        protected form = new TblAgeTypesForm(this.idPrefix);

    }
}