
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class LkpFormGrid extends Serenity.EntityGrid<LkpFormRow, any> {
        protected getColumnsKey() { return 'Configs.LkpForm'; }
        protected getDialogType() { return LkpFormDialog; }
        protected getIdProperty() { return LkpFormRow.idProperty; }
        protected getLocalTextPrefix() { return LkpFormRow.localTextPrefix; }
        protected getService() { return LkpFormService.baseUrl; }

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