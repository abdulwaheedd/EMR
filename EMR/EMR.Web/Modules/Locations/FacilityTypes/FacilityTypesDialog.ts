
namespace EMR.Locations {

    @Serenity.Decorators.registerClass()
    export class FacilityTypesDialog extends Serenity.EntityDialog<FacilityTypesRow, any> {
        protected getFormKey() { return FacilityTypesForm.formKey; }
        protected getIdProperty() { return FacilityTypesRow.idProperty; }
        protected getLocalTextPrefix() { return FacilityTypesRow.localTextPrefix; }
        protected getNameProperty() { return FacilityTypesRow.nameProperty; }
        protected getService() { return FacilityTypesService.baseUrl; }

        protected form = new FacilityTypesForm(this.idPrefix);

    }
}