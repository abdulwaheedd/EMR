
namespace EMR.Imaging {

    @Serenity.Decorators.registerClass()
    export class ImagevisitsGrid extends Serenity.EntityGrid<ImagevisitsRow, any> {
        protected getColumnsKey() { return 'Imaging.Imagevisits'; }
        protected getDialogType() { return ImagevisitsDialog; }
        protected getIdProperty() { return ImagevisitsRow.idProperty; }
        protected getLocalTextPrefix() { return ImagevisitsRow.localTextPrefix; }
        protected getService() { return ImagevisitsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "column-picker-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "refresh-button"), 1);
            return buttons;
        }
    }
}