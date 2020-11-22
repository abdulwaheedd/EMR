
namespace EMR.Medadmins {

    @Serenity.Decorators.registerClass()
    export class MedadministrationGrid extends Serenity.EntityGrid<MedadministrationRow, any> {
        protected getColumnsKey() { return 'Medadmins.Medadministration'; }
        protected getDialogType() { return MedadministrationDialog; }
        protected getIdProperty() { return MedadministrationRow.idProperty; }
        protected getLocalTextPrefix() { return MedadministrationRow.localTextPrefix; }
        protected getService() { return MedadministrationService.baseUrl; }

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