
namespace EMR.FM {

    @Serenity.Decorators.registerClass()
    export class LkpServicesGrid extends Serenity.EntityGrid<LkpServicesRow, any> {
        protected getColumnsKey() { return 'FM.LkpServices'; }
        protected getDialogType() { return LkpServicesDialog; }
        protected getIdProperty() { return LkpServicesRow.idProperty; }
        protected getLocalTextPrefix() { return LkpServicesRow.localTextPrefix; }
        protected getService() { return LkpServicesService.baseUrl; }

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