
namespace EMR.Verifications {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class CdiagnosisDialog extends Serenity.EntityDialog<CdiagnosisRow, any> {
        protected getFormKey() { return CdiagnosisForm.formKey; }
        protected getIdProperty() { return CdiagnosisRow.idProperty; }
        protected getLocalTextPrefix() { return CdiagnosisRow.localTextPrefix; }
        protected getNameProperty() { return CdiagnosisRow.nameProperty; }
        protected getService() { return CdiagnosisService.baseUrl; }

        protected form = new CdiagnosisForm(this.idPrefix);


        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);

            return buttons;
        }
    }
}