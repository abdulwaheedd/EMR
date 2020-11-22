
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class CyclesGrid extends Serenity.EntityGrid<CyclesRow, any> {
        protected getColumnsKey() { return 'Configs.Cycles'; }
        protected getDialogType() { return CyclesDialog; }
        protected getIdProperty() { return CyclesRow.idProperty; }
        protected getLocalTextPrefix() { return CyclesRow.localTextPrefix; }
        protected getService() { return CyclesService.baseUrl; }

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