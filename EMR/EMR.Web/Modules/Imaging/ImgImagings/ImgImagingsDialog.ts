
namespace EMR.Imaging {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class ImgImagingsDialog extends Serenity.EntityDialog<ImgImagingsRow, any> {
        protected getFormKey() { return ImgImagingsForm.formKey; }
        protected getIdProperty() { return ImgImagingsRow.idProperty; }
        protected getLocalTextPrefix() { return ImgImagingsRow.localTextPrefix; }
        protected getNameProperty() { return ImgImagingsRow.nameProperty; }
        protected getService() { return ImgImagingsService.baseUrl; }

        protected form = new ImgImagingsForm(this.idPrefix);

    }
}