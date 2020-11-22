
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class LkpImagingDialog extends Serenity.EntityDialog<LkpImagingRow, any> {
        protected getFormKey() { return LkpImagingForm.formKey; }
        protected getIdProperty() { return LkpImagingRow.idProperty; }
        protected getLocalTextPrefix() { return LkpImagingRow.localTextPrefix; }
        protected getNameProperty() { return LkpImagingRow.nameProperty; }
        protected getService() { return LkpImagingService.baseUrl; }

        protected form = new LkpImagingForm(this.idPrefix);

    }
}