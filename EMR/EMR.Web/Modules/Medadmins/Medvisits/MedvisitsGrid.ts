
namespace EMR.Medadmins {

    @Serenity.Decorators.registerClass()
    export class MedvisitsGrid extends Serenity.EntityGrid<MedvisitsRow, any> {
        protected getColumnsKey() { return 'Medadmins.Medvisits'; }
        protected getDialogType() { return MedvisitsDialog; }
        protected getIdProperty() { return MedvisitsRow.idProperty; }
        protected getLocalTextPrefix() { return MedvisitsRow.localTextPrefix; }
        protected getService() { return MedvisitsService.baseUrl; }

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