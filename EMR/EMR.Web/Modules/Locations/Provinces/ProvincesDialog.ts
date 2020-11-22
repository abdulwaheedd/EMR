
namespace EMR.Locations {

    @Serenity.Decorators.registerClass()
    export class ProvincesDialog extends Serenity.EntityDialog<ProvincesRow, any> {
        protected getFormKey() { return ProvincesForm.formKey; }
        protected getIdProperty() { return ProvincesRow.idProperty; }
        protected getLocalTextPrefix() { return ProvincesRow.localTextPrefix; }
        protected getNameProperty() { return ProvincesRow.nameProperty; }
        protected getService() { return ProvincesService.baseUrl; }

        protected form = new ProvincesForm(this.idPrefix);

    }
}