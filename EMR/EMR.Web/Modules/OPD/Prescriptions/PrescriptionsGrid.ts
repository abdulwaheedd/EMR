
namespace EMR.OPD {

    @Serenity.Decorators.registerClass()
    export class PrescriptionsGrid extends Serenity.EntityGrid<PrescriptionsRow, any> {
        protected getColumnsKey() { return 'OPD.Prescriptions'; }
        protected getDialogType() { return PrescriptionsDialog; }
        protected getIdProperty() { return PrescriptionsRow.idProperty; }
        protected getLocalTextPrefix() { return PrescriptionsRow.localTextPrefix; }
        protected getService() { return PrescriptionsService.baseUrl; }

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