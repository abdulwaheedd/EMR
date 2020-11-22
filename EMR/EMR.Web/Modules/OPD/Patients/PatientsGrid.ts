
namespace EMR.OPD {

    @Serenity.Decorators.registerClass()
    export class PatientsGrid extends Serenity.EntityGrid<PatientsRow, any> {
        protected getColumnsKey() { return 'OPD.Patients'; }
        protected getDialogType() { return PatientsDialog; }
        protected getIdProperty() { return PatientsRow.idProperty; }
        protected getLocalTextPrefix() { return PatientsRow.localTextPrefix; }
        protected getService() { return PatientsService.baseUrl; }

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