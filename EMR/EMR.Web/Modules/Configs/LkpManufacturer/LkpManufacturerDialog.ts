
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class LkpManufacturerDialog extends Serenity.EntityDialog<LkpManufacturerRow, any> {
        protected getFormKey() { return LkpManufacturerForm.formKey; }
        protected getIdProperty() { return LkpManufacturerRow.idProperty; }
        protected getLocalTextPrefix() { return LkpManufacturerRow.localTextPrefix; }
        protected getNameProperty() { return LkpManufacturerRow.nameProperty; }
        protected getService() { return LkpManufacturerService.baseUrl; }

        protected form = new LkpManufacturerForm(this.idPrefix);

    }
}