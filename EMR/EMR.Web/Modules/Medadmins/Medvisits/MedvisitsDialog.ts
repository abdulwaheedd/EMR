
namespace EMR.Medadmins {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class MedvisitsDialog extends Serenity.EntityDialog<MedvisitsRow, any> {
        protected getFormKey() { return MedvisitsForm.formKey; }
        protected getIdProperty() { return MedvisitsRow.idProperty; }
        protected getLocalTextPrefix() { return MedvisitsRow.localTextPrefix; }
        protected getNameProperty() { return MedvisitsRow.nameProperty; }
        protected getService() { return MedvisitsService.baseUrl; }

        protected form = new MedvisitsForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);

            // We could also remove delete button here, but for demonstration 
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);

            return buttons;
        }

        private prescriptionsGrid: MPrescriptionsTabGrid;
        private medBloodTransfusionGrid: BloodTransfusionsTabGrid;


        private loadedState: string;

        constructor() {
            super();

            this.prescriptionsGrid = new MPrescriptionsTabGrid(this.byId('MPrescriptionsGrid'));
            this.prescriptionsGrid.openDialogsAsPanel = true;

            this.medBloodTransfusionGrid = new BloodTransfusionsTabGrid(this.byId('BloodTransfusionsGrid'));
            this.medBloodTransfusionGrid.openDialogsAsPanel = true;
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

        loadEntity(entity: MedvisitsRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'MPrescriptions', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'BloodTransfusions', this.isNewOrDeleted());

            this.prescriptionsGrid.VisitId = entity.VisitId;
            this.medBloodTransfusionGrid.VisitId = entity.VisitId;
        }
    }
}