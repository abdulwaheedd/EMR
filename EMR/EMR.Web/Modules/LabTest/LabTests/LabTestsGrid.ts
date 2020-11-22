
namespace EMR.LabTest {

    @Serenity.Decorators.registerClass()
    export class LabTestsGrid extends Serenity.EntityGrid<LabTestsRow, any> {
        protected getColumnsKey() { return 'LabTest.LabTests'; }
        protected getDialogType() { return LabTestsDialog; }
        protected getIdProperty() { return LabTestsRow.idProperty; }
        protected getLocalTextPrefix() { return LabTestsRow.localTextPrefix; }
        protected getService() { return LabTestsService.baseUrl; }

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