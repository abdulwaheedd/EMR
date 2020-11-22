
namespace EMR.Verifications {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class CrecommendationsDialog extends Serenity.EntityDialog<CrecommendationsRow, any> {
        protected getFormKey() { return CrecommendationsForm.formKey; }
        protected getIdProperty() { return CrecommendationsRow.idProperty; }
        protected getLocalTextPrefix() { return CrecommendationsRow.localTextPrefix; }
        protected getNameProperty() { return CrecommendationsRow.nameProperty; }
        protected getService() { return CrecommendationsService.baseUrl; }

        protected form = new CrecommendationsForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);

            return buttons;
        }
    }
}