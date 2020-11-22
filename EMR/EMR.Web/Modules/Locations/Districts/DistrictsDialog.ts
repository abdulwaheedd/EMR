
namespace EMR.Locations {

    @Serenity.Decorators.registerClass()
    export class DistrictsDialog extends Serenity.EntityDialog<DistrictsRow, any> {
        protected getFormKey() { return DistrictsForm.formKey; }
        protected getIdProperty() { return DistrictsRow.idProperty; }
        protected getLocalTextPrefix() { return DistrictsRow.localTextPrefix; }
        protected getNameProperty() { return DistrictsRow.nameProperty; }
        protected getService() { return DistrictsService.baseUrl; }

        protected form = new DistrictsForm(this.idPrefix);

    }
}