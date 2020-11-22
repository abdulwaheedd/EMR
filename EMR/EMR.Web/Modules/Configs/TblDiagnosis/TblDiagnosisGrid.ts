
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblDiagnosisGrid extends Serenity.EntityGrid<TblDiagnosisRow, any> {
        protected getColumnsKey() { return 'Configs.TblDiagnosis'; }
        protected getDialogType() { return TblDiagnosisDialog; }
        protected getIdProperty() { return TblDiagnosisRow.idProperty; }
        protected getLocalTextPrefix() { return TblDiagnosisRow.localTextPrefix; }
        protected getService() { return TblDiagnosisService.baseUrl; }

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