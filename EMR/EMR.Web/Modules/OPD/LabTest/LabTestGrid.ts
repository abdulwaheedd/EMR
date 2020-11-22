
namespace EMR.OPD {

    @Serenity.Decorators.registerClass()
    export class LabTestGrid extends Serenity.EntityGrid<LabTestRow, any> {
        protected getColumnsKey() { return 'OPD.LabTest'; }
        protected getDialogType() { return LabTestDialog; }
        protected getIdProperty() { return LabTestRow.idProperty; }
        protected getLocalTextPrefix() { return LabTestRow.localTextPrefix; }
        protected getService() { return LabTestService.baseUrl; }

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