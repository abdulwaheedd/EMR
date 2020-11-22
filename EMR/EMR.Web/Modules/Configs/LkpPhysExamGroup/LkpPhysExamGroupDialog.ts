
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class LkpPhysExamGroupDialog extends Serenity.EntityDialog<LkpPhysExamGroupRow, any> {
        protected getFormKey() { return LkpPhysExamGroupForm.formKey; }
        protected getIdProperty() { return LkpPhysExamGroupRow.idProperty; }
        protected getLocalTextPrefix() { return LkpPhysExamGroupRow.localTextPrefix; }
        protected getNameProperty() { return LkpPhysExamGroupRow.nameProperty; }
        protected getService() { return LkpPhysExamGroupService.baseUrl; }

        protected form = new LkpPhysExamGroupForm(this.idPrefix);

    }
}