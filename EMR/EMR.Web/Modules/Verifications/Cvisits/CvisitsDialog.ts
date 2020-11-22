
namespace EMR.Verifications {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class CvisitsDialog extends Serenity.EntityDialog<CvisitsRow, any> {
        protected getFormKey() { return CvisitsForm.formKey; }
        protected getIdProperty() { return CvisitsRow.idProperty; }
        protected getLocalTextPrefix() { return CvisitsRow.localTextPrefix; }
        protected getNameProperty() { return CvisitsRow.nameProperty; }
        protected getService() { return CvisitsService.baseUrl; }

        protected form = new CvisitsForm(this.idPrefix);


        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);

            // We could also remove delete button here, but for demonstration 
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);

            return buttons;
        }
    }
}