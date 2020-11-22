
namespace EMR.OPD {

    @Serenity.Decorators.registerClass()
    export class PatientHistoryGrid extends Serenity.EntityGrid<PatientHistoryRow, any> {
        protected getColumnsKey() { return 'OPD.PatientHistory'; }
        protected getDialogType() { return PatientHistoryDialog; }
        protected getIdProperty() { return PatientHistoryRow.idProperty; }
        protected getLocalTextPrefix() { return PatientHistoryRow.localTextPrefix; }
        protected getService() { return PatientHistoryService.baseUrl; }

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