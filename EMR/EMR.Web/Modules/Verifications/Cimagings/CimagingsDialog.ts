
namespace EMR.Verifications {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class CimagingsDialog extends Serenity.EntityDialog<CimagingsRow, any> {
        protected getFormKey() { return CimagingsForm.formKey; }
        protected getIdProperty() { return CimagingsRow.idProperty; }
        protected getLocalTextPrefix() { return CimagingsRow.localTextPrefix; }
        protected getNameProperty() { return CimagingsRow.nameProperty; }
        protected getService() { return CimagingsService.baseUrl; }

        protected form = new CimagingsForm(this.idPrefix);


        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);

            return buttons;
        }
    }
}