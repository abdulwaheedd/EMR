
namespace EMR.Verifications {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class CphysicalexaminationDialog extends Serenity.EntityDialog<CphysicalexaminationRow, any> {
        protected getFormKey() { return CphysicalexaminationForm.formKey; }
        protected getIdProperty() { return CphysicalexaminationRow.idProperty; }
        protected getLocalTextPrefix() { return CphysicalexaminationRow.localTextPrefix; }
        protected getNameProperty() { return CphysicalexaminationRow.nameProperty; }
        protected getService() { return CphysicalexaminationService.baseUrl; }

        protected form = new CphysicalexaminationForm(this.idPrefix);


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