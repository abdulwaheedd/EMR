
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class BloodStatusDialog extends Serenity.EntityDialog<BloodStatusRow, any> {
        protected getFormKey() { return BloodStatusForm.formKey; }
        protected getIdProperty() { return BloodStatusRow.idProperty; }
        protected getLocalTextPrefix() { return BloodStatusRow.localTextPrefix; }
        protected getNameProperty() { return BloodStatusRow.nameProperty; }
        protected getService() { return BloodStatusService.baseUrl; }

        protected form = new BloodStatusForm(this.idPrefix);

    }
}