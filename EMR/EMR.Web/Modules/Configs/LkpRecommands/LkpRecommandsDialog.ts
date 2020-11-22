
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class LkpRecommandsDialog extends Serenity.EntityDialog<LkpRecommandsRow, any> {
        protected getFormKey() { return LkpRecommandsForm.formKey; }
        protected getIdProperty() { return LkpRecommandsRow.idProperty; }
        protected getLocalTextPrefix() { return LkpRecommandsRow.localTextPrefix; }
        protected getNameProperty() { return LkpRecommandsRow.nameProperty; }
        protected getService() { return LkpRecommandsService.baseUrl; }

        protected form = new LkpRecommandsForm(this.idPrefix);

    }
}