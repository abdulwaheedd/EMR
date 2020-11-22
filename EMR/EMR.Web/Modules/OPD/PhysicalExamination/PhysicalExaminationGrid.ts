
namespace EMR.OPD {

    @Serenity.Decorators.registerClass()
    export class PhysicalExaminationGrid extends Serenity.EntityGrid<PhysicalExaminationRow, any> {
        protected getColumnsKey() { return 'OPD.PhysicalExamination'; }
        protected getDialogType() { return PhysicalExaminationDialog; }
        protected getIdProperty() { return PhysicalExaminationRow.idProperty; }
        protected getLocalTextPrefix() { return PhysicalExaminationRow.localTextPrefix; }
        protected getService() { return PhysicalExaminationService.baseUrl; }

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