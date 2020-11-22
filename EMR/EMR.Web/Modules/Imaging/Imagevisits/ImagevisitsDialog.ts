
namespace EMR.Imaging {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class ImagevisitsDialog extends Serenity.EntityDialog<ImagevisitsRow, any> {
        protected getFormKey() { return ImagevisitsForm.formKey; }
        protected getIdProperty() { return ImagevisitsRow.idProperty; }
        protected getLocalTextPrefix() { return ImagevisitsRow.localTextPrefix; }
        protected getNameProperty() { return ImagevisitsRow.nameProperty; }
        protected getService() { return ImagevisitsService.baseUrl; }

        protected form = new ImagevisitsForm(this.idPrefix);

     protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);

            // We could also remove delete button here, but for demonstration 
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);

            return buttons;
        }

        private imagePatientsGrid: ImgImagingsTabGrid;


        private loadedState: string;

        constructor() {
            super();

            this.imagePatientsGrid = new ImgImagingsTabGrid(this.byId('ImgImagingsGrid'));
            this.imagePatientsGrid.openDialogsAsPanel = true;

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

        loadEntity(entity: ImagevisitsRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'ImgImagings', this.isNewOrDeleted());

            this.imagePatientsGrid.VisitId = entity.VisitId == null ? null : entity.VisitId;

        }

    }
}