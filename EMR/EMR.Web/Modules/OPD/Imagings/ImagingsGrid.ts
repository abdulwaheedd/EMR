
namespace EMR.OPD {

    @Serenity.Decorators.registerClass()
    export class ImagingsGrid extends Serenity.EntityGrid<ImagingsRow, any> {
        protected getColumnsKey() { return 'OPD.Imagings'; }
        protected getDialogType() { return ImagingsDialog; }
        protected getIdProperty() { return ImagingsRow.idProperty; }
        protected getLocalTextPrefix() { return ImagingsRow.localTextPrefix; }
        protected getService() { return ImagingsService.baseUrl; }

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