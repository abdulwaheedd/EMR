
namespace EMR.Medadmins {

    @Serenity.Decorators.registerClass()
    export class BloodTransfusionsGrid extends Serenity.EntityGrid<BloodTransfusionsRow, any> {
        protected getColumnsKey() { return 'Medadmins.BloodTransfusions'; }
        protected getDialogType() { return BloodTransfusionsDialog; }
        protected getIdProperty() { return BloodTransfusionsRow.idProperty; }
        protected getLocalTextPrefix() { return BloodTransfusionsRow.localTextPrefix; }
        protected getService() { return BloodTransfusionsService.baseUrl; }

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