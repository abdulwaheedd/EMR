
namespace EMR.VitalSigns {

    @Serenity.Decorators.registerClass()
    export class VitalPatientsGrid extends Serenity.EntityGrid<VitalPatientsRow, any> {
        protected getColumnsKey() { return 'VitalSigns.VitalPatients'; }
        protected getDialogType() { return VitalPatientsDialog; }
        protected getIdProperty() { return VitalPatientsRow.idProperty; }
        protected getLocalTextPrefix() { return VitalPatientsRow.localTextPrefix; }
        protected getService() { return VitalPatientsService.baseUrl; }

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