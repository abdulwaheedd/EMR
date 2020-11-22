
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class LkpUnitDialog extends Serenity.EntityDialog<LkpUnitRow, any> {
        protected getFormKey() { return LkpUnitForm.formKey; }
        protected getIdProperty() { return LkpUnitRow.idProperty; }
        protected getLocalTextPrefix() { return LkpUnitRow.localTextPrefix; }
        protected getNameProperty() { return LkpUnitRow.nameProperty; }
        protected getService() { return LkpUnitService.baseUrl; }

        protected form = new LkpUnitForm(this.idPrefix);

    }
}