
namespace EMR.OPD {

    @Serenity.Decorators.registerClass()
    export class RecommedationsGrid extends Serenity.EntityGrid<RecommedationsRow, any> {
        protected getColumnsKey() { return 'OPD.Recommedations'; }
        protected getDialogType() { return RecommedationsDialog; }
        protected getIdProperty() { return RecommedationsRow.idProperty; }
        protected getLocalTextPrefix() { return RecommedationsRow.localTextPrefix; }
        protected getService() { return RecommedationsService.baseUrl; }

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