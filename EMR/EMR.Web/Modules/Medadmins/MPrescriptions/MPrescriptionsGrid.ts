
namespace EMR.Medadmins {

    @Serenity.Decorators.registerClass()
    export class MPrescriptionsGrid extends Serenity.EntityGrid<MPrescriptionsRow, any> {
        protected getColumnsKey() { return 'Medadmins.MPrescriptions'; }
        protected getDialogType() { return MPrescriptionsDialog; }
        protected getIdProperty() { return MPrescriptionsRow.idProperty; }
        protected getLocalTextPrefix() { return MPrescriptionsRow.localTextPrefix; }
        protected getService() { return MPrescriptionsService.baseUrl; }

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