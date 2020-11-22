
namespace EMR.OPD {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class PrescriptionsDialog extends Serenity.EntityDialog<PrescriptionsRow, any> {
        protected getFormKey() { return PrescriptionsForm.formKey; }
        protected getIdProperty() { return PrescriptionsRow.idProperty; }
        protected getLocalTextPrefix() { return PrescriptionsRow.localTextPrefix; }
        protected getNameProperty() { return PrescriptionsRow.nameProperty; }
        protected getService() { return PrescriptionsService.baseUrl; }

        protected form = new PrescriptionsForm(this.idPrefix);

        private opdMedAdministration: OpdMedadministrationTabGrid;


        private loadedState: string;

        constructor() {
            super();

            this.opdMedAdministration = new OpdMedadministrationTabGrid(this.byId('OpdMedadministrationGrid'));
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

        loadEntity(entity: PrescriptionsRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'OpdMedadministration', this.isNewOrDeleted()); 


            this.opdMedAdministration.OrderId = entity.OrderId == null ? null : entity.OrderId;

            //this.opdMedAdministration.OrderId = entity.OrderId;

        }
    }
}