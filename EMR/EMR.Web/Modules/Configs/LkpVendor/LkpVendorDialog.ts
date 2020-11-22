
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class LkpVendorDialog extends Serenity.EntityDialog<LkpVendorRow, any> {
        protected getFormKey() { return LkpVendorForm.formKey; }
        protected getIdProperty() { return LkpVendorRow.idProperty; }
        protected getLocalTextPrefix() { return LkpVendorRow.localTextPrefix; }
        protected getNameProperty() { return LkpVendorRow.nameProperty; }
        protected getService() { return LkpVendorService.baseUrl; }

        protected form = new LkpVendorForm(this.idPrefix);

    }
}