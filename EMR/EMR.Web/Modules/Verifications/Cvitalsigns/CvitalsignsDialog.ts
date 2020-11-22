
namespace EMR.Verifications {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class CvitalsignsDialog extends Serenity.EntityDialog<CvitalsignsRow, any> {
        protected getFormKey() { return CvitalsignsForm.formKey; }
        protected getIdProperty() { return CvitalsignsRow.idProperty; }
        protected getLocalTextPrefix() { return CvitalsignsRow.localTextPrefix; }
        protected getNameProperty() { return CvitalsignsRow.nameProperty; }
        protected getService() { return CvitalsignsService.baseUrl; }

        protected form = new CvitalsignsForm(this.idPrefix);

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