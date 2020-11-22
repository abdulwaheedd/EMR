
namespace EMR.Medadmins {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class MedadminpatientsDialog extends Serenity.EntityDialog<MedadminpatientsRow, any> {
        protected getFormKey() { return MedadminpatientsForm.formKey; }
        protected getIdProperty() { return MedadminpatientsRow.idProperty; }
        protected getLocalTextPrefix() { return MedadminpatientsRow.localTextPrefix; }
        protected getNameProperty() { return MedadminpatientsRow.nameProperty; }
        protected getService() { return MedadminpatientsService.baseUrl; }

        protected form = new MedadminpatientsForm(this.idPrefix);


        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);

            // We could also remove delete button here, but for demonstration 
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);

            return buttons;
        }


        private medVisitsGrid: MedvisitsTabGrid;


        private loadedState: string;

        constructor() {
            super();

            this.medVisitsGrid = new MedvisitsTabGrid(this.byId('MedvisitsGrid'));
            this.medVisitsGrid.openDialogsAsPanel = true;
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

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Medvisits', this.isNewOrDeleted());

            this.medVisitsGrid.MrId = entity.Mrid;
        }
    }
}