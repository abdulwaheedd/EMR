
namespace EMR.LabTest {

    @Serenity.Decorators.registerClass()
    export class LabvisitsGrid extends Serenity.EntityGrid<LabvisitsRow, any> {
        protected getColumnsKey() { return 'LabTest.Labvisits'; }
        protected getDialogType() { return LabvisitsDialog; }
        protected getIdProperty() { return LabvisitsRow.idProperty; }
        protected getLocalTextPrefix() { return LabvisitsRow.localTextPrefix; }
        protected getService() { return LabvisitsService.baseUrl; }

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