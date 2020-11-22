
namespace EMR.Verifications {

    @Serenity.Decorators.registerClass()
    export class CdiagnosisGrid extends Serenity.EntityGrid<CdiagnosisRow, any> {
        protected getColumnsKey() { return 'Verifications.Cdiagnosis'; }
        protected getDialogType() { return CdiagnosisDialog; }
        protected getIdProperty() { return CdiagnosisRow.idProperty; }
        protected getLocalTextPrefix() { return CdiagnosisRow.localTextPrefix; }
        protected getService() { return CdiagnosisService.baseUrl; }

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