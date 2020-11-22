
namespace EMR.Medadmins {

    @Serenity.Decorators.registerClass()
    export class MedadminpatientsGrid extends Serenity.EntityGrid<MedadminpatientsRow, any> {
        protected getColumnsKey() { return 'Medadmins.Medadminpatients'; }
        protected getDialogType() { return MedadminpatientsDialog; }
        protected getIdProperty() { return MedadminpatientsRow.idProperty; }
        protected getLocalTextPrefix() { return MedadminpatientsRow.localTextPrefix; }
        protected getService() { return MedadminpatientsService.baseUrl; }

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