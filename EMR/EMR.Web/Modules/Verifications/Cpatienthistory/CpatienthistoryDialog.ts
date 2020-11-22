
namespace EMR.Verifications {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class CpatienthistoryDialog extends Serenity.EntityDialog<CpatienthistoryRow, any> {
        protected getFormKey() { return CpatienthistoryForm.formKey; }
        protected getIdProperty() { return CpatienthistoryRow.idProperty; }
        protected getLocalTextPrefix() { return CpatienthistoryRow.localTextPrefix; }
        protected getNameProperty() { return CpatienthistoryRow.nameProperty; }
        protected getService() { return CpatienthistoryService.baseUrl; }

        protected form = new CpatienthistoryForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);

            return buttons;
        }
    }
}