
namespace EMR.FM {

    @Serenity.Decorators.registerClass()
    export class LkpServiceTypesDialog extends Serenity.EntityDialog<LkpServiceTypesRow, any> {
        protected getFormKey() { return LkpServiceTypesForm.formKey; }
        protected getIdProperty() { return LkpServiceTypesRow.idProperty; }
        protected getLocalTextPrefix() { return LkpServiceTypesRow.localTextPrefix; }
        protected getNameProperty() { return LkpServiceTypesRow.nameProperty; }
        protected getService() { return LkpServiceTypesService.baseUrl; }

        protected form = new LkpServiceTypesForm(this.idPrefix);

    }
}