
namespace EMR.Imaging {

    @Serenity.Decorators.registerClass()
    export class ImgImagingsGrid extends Serenity.EntityGrid<ImgImagingsRow, any> {
        protected getColumnsKey() { return 'Imaging.ImgImagings'; }
        protected getDialogType() { return ImgImagingsDialog; }
        protected getIdProperty() { return ImgImagingsRow.idProperty; }
        protected getLocalTextPrefix() { return ImgImagingsRow.localTextPrefix; }
        protected getService() { return ImgImagingsService.baseUrl; }

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