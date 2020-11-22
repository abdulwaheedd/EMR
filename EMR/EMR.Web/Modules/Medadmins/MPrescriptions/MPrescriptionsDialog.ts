
namespace EMR.Medadmins {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class MPrescriptionsDialog extends Serenity.EntityDialog<MPrescriptionsRow, any> {
        protected getFormKey() { return MPrescriptionsForm.formKey; }
        protected getIdProperty() { return MPrescriptionsRow.idProperty; }
        protected getLocalTextPrefix() { return MPrescriptionsRow.localTextPrefix; }
        protected getNameProperty() { return MPrescriptionsRow.nameProperty; }
        protected getService() { return MPrescriptionsService.baseUrl; }

        protected form = new MPrescriptionsForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);

            // We could also remove delete button here, but for demonstration 
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);

            return buttons;
        }

        private opdMedAdministration: MMedadministrationTabGrid;


        private loadedState: string;

        constructor() {
            super();

            this.opdMedAdministration = new MMedadministrationTabGrid(this.byId('MedadministrationGrid'));
            this.opdMedAdministration.openDialogsAsPanel = true;


            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);

        }

        getSaveState() {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        }

        loadResponse(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }

        loadEntity(entity: MedadministrationRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'OpdMedadministration', this.isNewOrDeleted());

            this.opdMedAdministration.OrderId = entity.OrderId == null ? null : entity.OrderId;

        }
    }
}