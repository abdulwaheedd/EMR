
namespace EMR.FM {

    @Serenity.Decorators.registerClass()
    export class LkpServicesDialog extends Serenity.EntityDialog<LkpServicesRow, any> {
        protected getFormKey() { return LkpServicesForm.formKey; }
        protected getIdProperty() { return LkpServicesRow.idProperty; }
        protected getLocalTextPrefix() { return LkpServicesRow.localTextPrefix; }
        protected getNameProperty() { return LkpServicesRow.nameProperty; }
        protected getService() { return LkpServicesService.baseUrl; }

        protected form = new LkpServicesForm(this.idPrefix);

    }
}