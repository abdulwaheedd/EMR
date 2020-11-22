
namespace EMR.Verifications {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class CmedprescriptionsDialog extends Serenity.EntityDialog<CmedprescriptionsRow, any> {
        protected getFormKey() { return CmedprescriptionsForm.formKey; }
        protected getIdProperty() { return CmedprescriptionsRow.idProperty; }
        protected getLocalTextPrefix() { return CmedprescriptionsRow.localTextPrefix; }
        protected getNameProperty() { return CmedprescriptionsRow.nameProperty; }
        protected getService() { return CmedprescriptionsService.baseUrl; }

        protected form = new CmedprescriptionsForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);

            return buttons;
        }

        private cmedadministrationTabGrid: CcmedadministrationTabGrid;


        private loadedState: string;

        constructor() {
            super();

            this.cmedadministrationTabGrid = new CcmedadministrationTabGrid(this.byId('CmedadministrationGrid'));
            this.cmedadministrationTabGrid.openDialogsAsPanel = true;


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

        loadEntity(entity: CmedprescriptionsRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Cmedadministration', this.isNewOrDeleted());

            this.cmedadministrationTabGrid.OrderId = entity.OrderId == null ? null : entity.OrderId;

        }
    }
}