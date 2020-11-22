
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class LkpTestTypesDialog extends Serenity.EntityDialog<LkpTestTypesRow, any> {
        protected getFormKey() { return LkpTestTypesForm.formKey; }
        protected getIdProperty() { return LkpTestTypesRow.idProperty; }
        protected getLocalTextPrefix() { return LkpTestTypesRow.localTextPrefix; }
        protected getNameProperty() { return LkpTestTypesRow.nameProperty; }
        protected getService() { return LkpTestTypesService.baseUrl; }

        protected form = new LkpTestTypesForm(this.idPrefix);

    }
}