
namespace EMR.OPD {

    @Serenity.Decorators.registerClass()
    export class DiagnosisGrid extends Serenity.EntityGrid<DiagnosisRow, any> {
        protected getColumnsKey() { return 'OPD.Diagnosis'; }
        protected getDialogType() { return DiagnosisDialog; }
        protected getIdProperty() { return DiagnosisRow.idProperty; }
        protected getLocalTextPrefix() { return DiagnosisRow.localTextPrefix; }
        protected getService() { return DiagnosisService.baseUrl; }

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