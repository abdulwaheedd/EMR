
namespace EMR.Pharmacy {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class MedPatientsDialog extends Serenity.EntityDialog<MedPatientsRow, any> {
        protected getFormKey() { return MedPatientsForm.formKey; }
        protected getIdProperty() { return MedPatientsRow.idProperty; }
        protected getLocalTextPrefix() { return MedPatientsRow.localTextPrefix; }
        protected getNameProperty() { return MedPatientsRow.nameProperty; }
        protected getService() { return MedPatientsService.baseUrl; }

        protected form = new MedPatientsForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);

            // We could also remove delete button here, but for demonstration 
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);

            return buttons;
        }

        private patientVisits: MedvisitsTabGrid;


        private loadedState: string;

        constructor() {
            super();


            this.patientVisits = new MedvisitsTabGrid(this.byId('MedvisitsGrid'));
            this.patientVisits.openDialogsAsPanel = true;


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

        loadEntity(entity: MedPatientsRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Medvisits', this.isNewOrDeleted());

            this.patientVisits.MrId = entity.Mrid;
        }
    }
}