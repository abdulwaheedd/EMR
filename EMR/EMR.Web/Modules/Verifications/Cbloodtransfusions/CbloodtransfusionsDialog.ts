
namespace EMR.Verifications {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class CbloodtransfusionsDialog extends Serenity.EntityDialog<CbloodtransfusionsRow, any> {
        protected getFormKey() { return CbloodtransfusionsForm.formKey; }
        protected getIdProperty() { return CbloodtransfusionsRow.idProperty; }
        protected getLocalTextPrefix() { return CbloodtransfusionsRow.localTextPrefix; }
        protected getNameProperty() { return CbloodtransfusionsRow.nameProperty; }
        protected getService() { return CbloodtransfusionsService.baseUrl; }

        protected form = new CbloodtransfusionsForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);

            return buttons;
        }
    }
}