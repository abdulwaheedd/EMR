
namespace EMR.Verifications {

    @Serenity.Decorators.registerClass()
    export class CpatientsGrid extends Serenity.EntityGrid<CpatientsRow, any> {
        protected getColumnsKey() { return 'Verifications.Cpatients'; }
        protected getDialogType() { return CpatientsDialog; }
        protected getIdProperty() { return CpatientsRow.idProperty; }
        protected getLocalTextPrefix() { return CpatientsRow.localTextPrefix; }
        protected getService() { return CpatientsService.baseUrl; }

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