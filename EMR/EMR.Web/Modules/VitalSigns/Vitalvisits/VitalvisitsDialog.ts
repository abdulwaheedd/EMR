
namespace EMR.VitalSigns {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class VitalvisitsDialog extends Serenity.EntityDialog<VitalvisitsRow, any> {
        protected getFormKey() { return VitalvisitsForm.formKey; }
        protected getIdProperty() { return VitalvisitsRow.idProperty; }
        protected getLocalTextPrefix() { return VitalvisitsRow.localTextPrefix; }
        protected getNameProperty() { return VitalvisitsRow.nameProperty; }
        protected getService() { return VitalvisitsService.baseUrl; }

        protected form = new VitalvisitsForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);

            // We could also remove delete button here, but for demonstration 
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);

            return buttons;
        }

        private vitalSignsGrid: VVitalSignsTabGrid;
        private schedulingGrid: SchedulingTabGrid;


        private loadedState: string;

        constructor() {
            super();

            this.vitalSignsGrid = new VVitalSignsTabGrid(this.byId('VVitalSignsGrid'));
            this.vitalSignsGrid.openDialogsAsPanel = true;
            
            //this.schedulingGrid = new SchedulingTabGrid(this.byId('SchedulingGrid'));
            //this.schedulingGrid.openDialogsAsPanel = true;

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

        loadEntity(entity: VitalvisitsRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'VVitalSigns', this.isNewOrDeleted());
            //Serenity.TabsExtensions.setDisabled(this.tabs, 'Scheduling', this.isNewOrDeleted());

            this.vitalSignsGrid.VisitId = entity.VisitId == null ? null : entity.VisitId;
            //this.schedulingGrid.VisitId = entity.VisitId == null ? null : entity.VisitId;

        }
    }
}