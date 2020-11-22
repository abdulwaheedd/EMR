
namespace EMR.Configs {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class LkpHistoryDialog extends Serenity.EntityDialog<LkpHistoryRow, any> {
        protected getFormKey() { return LkpHistoryForm.formKey; }
        protected getIdProperty() { return LkpHistoryRow.idProperty; }
        protected getLocalTextPrefix() { return LkpHistoryRow.localTextPrefix; }
        protected getNameProperty() { return LkpHistoryRow.nameProperty; }
        protected getService() { return LkpHistoryService.baseUrl; }

        protected form = new LkpHistoryForm(this.idPrefix);

    }
}