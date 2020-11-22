
namespace EMR.LabTest {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class LabPatientsDialog extends Serenity.EntityDialog<LabPatientsRow, any> {
        protected getFormKey() { return LabPatientsForm.formKey; }
        protected getIdProperty() { return LabPatientsRow.idProperty; }
        protected getLocalTextPrefix() { return LabPatientsRow.localTextPrefix; }
        protected getNameProperty() { return LabPatientsRow.nameProperty; }
        protected getService() { return LabPatientsService.baseUrl; }

        protected form = new LabPatientsForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);

            // We could also remove delete button here, but for demonstration 
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);

            return buttons;
        }

        private labVisits: LabvisitsTabGrid;


        private loadedState: string;

        constructor() {
            super();


            this.labVisits = new LabvisitsTabGrid(this.byId('LabvisitsGrid'));
            this.labVisits.openDialogsAsPanel = true;


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

        loadEntity(entity: LabPatientsRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Labvisits', this.isNewOrDeleted());

            this.labVisits.MrId = entity.Mrid;
        }
    }
}