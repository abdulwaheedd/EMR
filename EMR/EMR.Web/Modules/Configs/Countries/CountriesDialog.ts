
namespace EMR.Configs {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class CountriesDialog extends Serenity.EntityDialog<CountriesRow, any> {
        protected getFormKey() { return CountriesForm.formKey; }
        protected getIdProperty() { return CountriesRow.idProperty; }
        protected getLocalTextPrefix() { return CountriesRow.localTextPrefix; }
        protected getNameProperty() { return CountriesRow.nameProperty; }
        protected getService() { return CountriesService.baseUrl; }

        protected form = new CountriesForm(this.idPrefix);

    }
}