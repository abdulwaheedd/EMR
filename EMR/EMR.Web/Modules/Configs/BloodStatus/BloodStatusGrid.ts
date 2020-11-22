
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class BloodStatusGrid extends Serenity.EntityGrid<BloodStatusRow, any> {
        protected getColumnsKey() { return 'Configs.BloodStatus'; }
        protected getDialogType() { return BloodStatusDialog; }
        protected getIdProperty() { return BloodStatusRow.idProperty; }
        protected getLocalTextPrefix() { return BloodStatusRow.localTextPrefix; }
        protected getService() { return BloodStatusService.baseUrl; }

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