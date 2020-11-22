
namespace EMR.OPD {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class RecommedationsDialog extends Serenity.EntityDialog<RecommedationsRow, any> {
        protected getFormKey() { return RecommedationsForm.formKey; }
        protected getIdProperty() { return RecommedationsRow.idProperty; }
        protected getLocalTextPrefix() { return RecommedationsRow.localTextPrefix; }
        protected getNameProperty() { return RecommedationsRow.nameProperty; }
        protected getService() { return RecommedationsService.baseUrl; }

        protected form = new RecommedationsForm(this.idPrefix);

    }
}