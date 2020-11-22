
namespace EMR.Register {

    @Serenity.Decorators.registerClass()
    export class RegoutpatientsGrid extends Serenity.EntityGrid<RegoutpatientsRow, any> {
        protected getColumnsKey() { return 'Register.Regoutpatients'; }
        protected getDialogType() { return RegoutpatientsDialog; }
        protected getIdProperty() { return RegoutpatientsRow.idProperty; }
        protected getLocalTextPrefix() { return RegoutpatientsRow.localTextPrefix; }
        protected getService() { return RegoutpatientsService.baseUrl; }

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