
namespace EMR.OPD {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class PatientsDialog extends Serenity.EntityDialog<PatientsRow, any> {
        protected getFormKey() { return PatientsForm.formKey; }
        protected getIdProperty() { return PatientsRow.idProperty; }
        protected getLocalTextPrefix() { return PatientsRow.localTextPrefix; }
        protected getNameProperty() { return PatientsRow.nameProperty; }
        protected getService() { return PatientsService.baseUrl; }

        protected form = new PatientsForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);

            // We could also remove delete button here, but for demonstration 
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);

            buttons.push({
                title: 'History',
                cssClass: 'print-preview-button',
                hint: "View all visits",
                onClick: () => {
                    Q.postToService({ url: '/Ver/Patients#edit/' + this.entity.Mrid, request: null, target: '_blank' });
                }
            });
            return buttons;
        }

        
        private patientVisits: VisitsTabGrid;


        private loadedState: string;

        constructor() {
            super();


            this.patientVisits = new VisitsTabGrid(this.byId('VisitsGrid'));
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

        loadEntity(entity: PatientsRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Visits', this.isNewOrDeleted());

            this.patientVisits.Mrid = entity.Mrid;
        }

    }
}