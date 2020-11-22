
namespace EMR.OPD {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class ImagingsDialog extends Serenity.EntityDialog<ImagingsRow, any> {
        protected getFormKey() { return ImagingsForm.formKey; }
        protected getIdProperty() { return ImagingsRow.idProperty; }
        protected getLocalTextPrefix() { return ImagingsRow.localTextPrefix; }
        protected getNameProperty() { return ImagingsRow.nameProperty; }
        protected getService() { return ImagingsService.baseUrl; }

        protected form = new ImagingsForm(this.idPrefix);

    }
}