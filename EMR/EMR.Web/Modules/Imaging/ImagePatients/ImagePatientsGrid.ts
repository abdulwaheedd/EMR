
namespace EMR.Imaging {

    @Serenity.Decorators.registerClass()
    export class ImagePatientsGrid extends Serenity.EntityGrid<ImagePatientsRow, any> {
        protected getColumnsKey() { return 'Imaging.ImagePatients'; }
        protected getDialogType() { return ImagePatientsDialog; }
        protected getIdProperty() { return ImagePatientsRow.idProperty; }
        protected getLocalTextPrefix() { return ImagePatientsRow.localTextPrefix; }
        protected getService() { return ImagePatientsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "column-picker-button"), 1);
            return buttons;
        }
    }
}