
namespace EMR.Verifications {

    @Serenity.Decorators.registerClass()
    export class CphysicalexaminationGrid extends Serenity.EntityGrid<CphysicalexaminationRow, any> {
        protected getColumnsKey() { return 'Verifications.Cphysicalexamination'; }
        protected getDialogType() { return CphysicalexaminationDialog; }
        protected getIdProperty() { return CphysicalexaminationRow.idProperty; }
        protected getLocalTextPrefix() { return CphysicalexaminationRow.localTextPrefix; }
        protected getService() { return CphysicalexaminationService.baseUrl; }

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