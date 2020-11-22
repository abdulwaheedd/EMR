
namespace EMR.Imaging {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class ImagePatientsDialog extends Serenity.EntityDialog<ImagePatientsRow, any> {
        protected getFormKey() { return ImagePatientsForm.formKey; }
        protected getIdProperty() { return ImagePatientsRow.idProperty; }
        protected getLocalTextPrefix() { return ImagePatientsRow.localTextPrefix; }
        protected getNameProperty() { return ImagePatientsRow.nameProperty; }
        protected getService() { return ImagePatientsService.baseUrl; }

        protected form = new ImagePatientsForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);

            // We could also remove delete button here, but for demonstration 
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);

            return buttons;
        }

        private imagePatients: ImagevisitsTabGrid;


        private loadedState: string;

        constructor() {
            super();


            this.imagePatients = new ImagevisitsTabGrid(this.byId('ImagevisitsGrid'));
            this.imagePatients.openDialogsAsPanel = true;


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

        loadEntity(entity: ImagePatientsRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Imagevisits', this.isNewOrDeleted());

            this.imagePatients.MrId = entity.Mrid;
        }
    }
}