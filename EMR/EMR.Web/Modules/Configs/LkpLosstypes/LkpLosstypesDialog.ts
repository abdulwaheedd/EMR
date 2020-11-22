
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class LkpLosstypesDialog extends Serenity.EntityDialog<LkpLosstypesRow, any> {
        protected getFormKey() { return LkpLosstypesForm.formKey; }
        protected getIdProperty() { return LkpLosstypesRow.idProperty; }
        protected getLocalTextPrefix() { return LkpLosstypesRow.localTextPrefix; }
        protected getNameProperty() { return LkpLosstypesRow.nameProperty; }
        protected getService() { return LkpLosstypesService.baseUrl; }

        protected form = new LkpLosstypesForm(this.idPrefix);

    }
}