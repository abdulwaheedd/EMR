
namespace EMR.Pharmacy {

    @Serenity.Decorators.registerClass()
    export class MedPrescriptionsGrid extends Serenity.EntityGrid<MedPrescriptionsRow, any> {
        protected getColumnsKey() { return 'Pharmacy.MedPrescriptions'; }
        protected getDialogType() { return MedPrescriptionsDialog; }
        protected getIdProperty() { return MedPrescriptionsRow.idProperty; }
        protected getLocalTextPrefix() { return MedPrescriptionsRow.localTextPrefix; }
        protected getService() { return MedPrescriptionsService.baseUrl; }

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