
namespace EMR.Verifications {

    @Serenity.Decorators.registerClass()
    export class CmedprescriptionsGrid extends Serenity.EntityGrid<CmedprescriptionsRow, any> {
        protected getColumnsKey() { return 'Verifications.Cmedprescriptions'; }
        protected getDialogType() { return CmedprescriptionsDialog; }
        protected getIdProperty() { return CmedprescriptionsRow.idProperty; }
        protected getLocalTextPrefix() { return CmedprescriptionsRow.localTextPrefix; }
        protected getService() { return CmedprescriptionsService.baseUrl; }

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