
namespace EMR.Pharmacy {
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

            buttons.push({
                title: 'Print All',
                cssClass: 'print-preview-button',
                hint: "Print prescriptions",
                onClick: () => {
                    //window.location.href = Q.resolveUrl('~/PReport/Index?VisitId=' + this.entity.VisitId);
                    Q.postToService({ url: '~/PReport/Index?VisitId=' + this.entity.VisitId, request: null, target: '_blank' });
                }
            });


            buttons.push({
                title: 'Print Last',
                cssClass: 'print-preview-button',
                hint: "Print prescriptions",
                onClick: () => {
                    //window.location.href = Q.resolveUrl('~/PReport/Index?VisitId=' + this.entity.VisitId);
                    Q.postToService({ url: '~/PReportt/Index?VisitId=' + this.entity.VisitId, request: null, target: '_blank' });
                }
            });
            return buttons;
        }

        private prescriptionGrid: MedPrescriptionsTabGrid;


        private loadedState: string;

        constructor() {
            super();

            this.prescriptionGrid = new MedPrescriptionsTabGrid(this.byId('MedPrescriptionsGrid'));
            this.prescriptionGrid.openDialogsAsPanel = true;

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

        loadEntity(entity: MedvisitsRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'MedPrescriptions', this.isNewOrDeleted());

            this.prescriptionGrid.VisitId = entity.VisitId == null ? null : entity.VisitId;

        }

    }
}