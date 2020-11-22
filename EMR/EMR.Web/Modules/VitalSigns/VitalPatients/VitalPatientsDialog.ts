
namespace EMR.VitalSigns {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class VitalPatientsDialog extends Serenity.EntityDialog<VitalPatientsRow, any> {
        protected getFormKey() { return VitalPatientsForm.formKey; }
        protected getIdProperty() { return VitalPatientsRow.idProperty; }
        protected getLocalTextPrefix() { return VitalPatientsRow.localTextPrefix; }
        protected getNameProperty() { return VitalPatientsRow.nameProperty; }
        protected getService() { return VitalPatientsService.baseUrl; }

        protected form = new VitalPatientsForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);

            // We could also remove delete button here, but for demonstration 
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);

            return buttons;
        }

        private vitalSignsGrid: VitalvisitsTabGrid;


        private loadedState: string;

        constructor() {
            super();


            this.vitalSignsGrid = new VitalvisitsTabGrid(this.byId('VitalvisitsGrid'));
            this.vitalSignsGrid.openDialogsAsPanel = true;


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

        loadEntity(entity: VitalPatientsRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Vitalvisits', this.isNewOrDeleted());

            this.vitalSignsGrid.MrId = entity.Mrid;
        }
    }
}