
namespace EMR.Pharmacy {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class MedPrescriptionsDialog extends Serenity.EntityDialog<MedPrescriptionsRow, any> {
        protected getFormKey() { return MedPrescriptionsForm.formKey; }
        protected getIdProperty() { return MedPrescriptionsRow.idProperty; }
        protected getLocalTextPrefix() { return MedPrescriptionsRow.localTextPrefix; }
        protected getNameProperty() { return MedPrescriptionsRow.nameProperty; }
        protected getService() { return MedPrescriptionsService.baseUrl; }

        protected form = new MedPrescriptionsForm(this.idPrefix);

    }
}