
namespace EMR.Locations {

    @Serenity.Decorators.registerClass()
    export class FacilityInfoDialog extends Serenity.EntityDialog<FacilityInfoRow, any> {
        protected getFormKey() { return FacilityInfoForm.formKey; }
        protected getIdProperty() { return FacilityInfoRow.idProperty; }
        protected getLocalTextPrefix() { return FacilityInfoRow.localTextPrefix; }
        protected getNameProperty() { return FacilityInfoRow.nameProperty; }
        protected getService() { return FacilityInfoService.baseUrl; }

        protected form = new FacilityInfoForm(this.idPrefix);

    }
}