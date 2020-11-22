
namespace EMR.Verifications {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class ClabtestsDialog extends Serenity.EntityDialog<ClabtestsRow, any> {
        protected getFormKey() { return ClabtestsForm.formKey; }
        protected getIdProperty() { return ClabtestsRow.idProperty; }
        protected getLocalTextPrefix() { return ClabtestsRow.localTextPrefix; }
        protected getNameProperty() { return ClabtestsRow.nameProperty; }
        protected getService() { return ClabtestsService.baseUrl; }

        protected form = new ClabtestsForm(this.idPrefix);


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