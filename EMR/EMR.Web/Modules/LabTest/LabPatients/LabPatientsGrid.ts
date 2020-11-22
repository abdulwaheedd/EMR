
namespace EMR.LabTest {

    @Serenity.Decorators.registerClass()
    export class LabPatientsGrid extends Serenity.EntityGrid<LabPatientsRow, any> {
        protected getColumnsKey() { return 'LabTest.LabPatients'; }
        protected getDialogType() { return LabPatientsDialog; }
        protected getIdProperty() { return LabPatientsRow.idProperty; }
        protected getLocalTextPrefix() { return LabPatientsRow.localTextPrefix; }
        protected getService() { return LabPatientsService.baseUrl; }

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