
namespace EMR.LabTest {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class LabvisitsDialog extends Serenity.EntityDialog<LabvisitsRow, any> {
        protected getFormKey() { return LabvisitsForm.formKey; }
        protected getIdProperty() { return LabvisitsRow.idProperty; }
        protected getLocalTextPrefix() { return LabvisitsRow.localTextPrefix; }
        protected getNameProperty() { return LabvisitsRow.nameProperty; }
        protected getService() { return LabvisitsService.baseUrl; }

        protected form = new LabvisitsForm(this.idPrefix);
        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);

            // We could also remove delete button here, but for demonstration 
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);

            return buttons;
        }

        private labTestVisits: LabTestsTabGrid;


        private loadedState: string;

        constructor() {
            super();

            this.labTestVisits = new LabTestsTabGrid(this.byId('LabTestsGrid'));
            this.labTestVisits.openDialogsAsPanel = true;

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

        loadEntity(entity: LabvisitsRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'LabTests', this.isNewOrDeleted());

            this.labTestVisits.VisitId = entity.VisitId == null ? null : entity.VisitId;

        }
    }
}