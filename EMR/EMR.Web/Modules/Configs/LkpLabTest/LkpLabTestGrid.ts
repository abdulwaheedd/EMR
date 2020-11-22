
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class LkpLabTestGrid extends Serenity.EntityGrid<LkpLabTestRow, any> {
        protected getColumnsKey() { return 'Configs.LkpLabTest'; }
        protected getDialogType() { return LkpLabTestDialog; }
        protected getIdProperty() { return LkpLabTestRow.idProperty; }
        protected getLocalTextPrefix() { return LkpLabTestRow.localTextPrefix; }
        protected getService() { return LkpLabTestService.baseUrl; }

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