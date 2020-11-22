
namespace EMR.Verifications {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class CmedadministrationDialog extends Serenity.EntityDialog<CmedadministrationRow, any> {
        protected getFormKey() { return CmedadministrationForm.formKey; }
        protected getIdProperty() { return CmedadministrationRow.idProperty; }
        protected getLocalTextPrefix() { return CmedadministrationRow.localTextPrefix; }
        protected getNameProperty() { return CmedadministrationRow.nameProperty; }
        protected getService() { return CmedadministrationService.baseUrl; }

        protected form = new CmedadministrationForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);

            return buttons;
        }
    }
}