
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class LkpFormDialog extends Serenity.EntityDialog<LkpFormRow, any> {
        protected getFormKey() { return LkpFormForm.formKey; }
        protected getIdProperty() { return LkpFormRow.idProperty; }
        protected getLocalTextPrefix() { return LkpFormRow.localTextPrefix; }
        protected getNameProperty() { return LkpFormRow.nameProperty; }
        protected getService() { return LkpFormService.baseUrl; }

        protected form = new LkpFormForm(this.idPrefix);

    }
}