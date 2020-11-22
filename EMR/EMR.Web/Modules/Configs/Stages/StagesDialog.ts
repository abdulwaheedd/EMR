
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class StagesDialog extends Serenity.EntityDialog<StagesRow, any> {
        protected getFormKey() { return StagesForm.formKey; }
        protected getIdProperty() { return StagesRow.idProperty; }
        protected getLocalTextPrefix() { return StagesRow.localTextPrefix; }
        protected getNameProperty() { return StagesRow.nameProperty; }
        protected getService() { return StagesService.baseUrl; }

        protected form = new StagesForm(this.idPrefix);

    }
}