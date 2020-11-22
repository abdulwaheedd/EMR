
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class LkpPhysExamsDialog extends Serenity.EntityDialog<LkpPhysExamsRow, any> {
        protected getFormKey() { return LkpPhysExamsForm.formKey; }
        protected getIdProperty() { return LkpPhysExamsRow.idProperty; }
        protected getLocalTextPrefix() { return LkpPhysExamsRow.localTextPrefix; }
        protected getNameProperty() { return LkpPhysExamsRow.nameProperty; }
        protected getService() { return LkpPhysExamsService.baseUrl; }

        protected form = new LkpPhysExamsForm(this.idPrefix);

    }
}