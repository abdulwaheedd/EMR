
namespace EMR.OPD {

    @Serenity.Decorators.registerClass()
    export class VisitsGrid extends Serenity.EntityGrid<VisitsRow, any> {
        protected getColumnsKey() { return 'OPD.Visits'; }
        protected getDialogType() { return VisitsDialog; }
        protected getIdProperty() { return VisitsRow.idProperty; }
        protected getLocalTextPrefix() { return VisitsRow.localTextPrefix; }
        protected getService() { return VisitsService.baseUrl; }

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