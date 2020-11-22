
namespace EMR.Pharmacy {

    @Serenity.Decorators.registerClass()
    export class MedPatientsGrid extends Serenity.EntityGrid<MedPatientsRow, any> {
        protected getColumnsKey() { return 'Pharmacy.MedPatients'; }
        protected getDialogType() { return MedPatientsDialog; }
        protected getIdProperty() { return MedPatientsRow.idProperty; }
        protected getLocalTextPrefix() { return MedPatientsRow.localTextPrefix; }
        protected getService() { return MedPatientsService.baseUrl; }

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