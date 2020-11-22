
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class LkpPhysExamsGrid extends Serenity.EntityGrid<LkpPhysExamsRow, any> {
        protected getColumnsKey() { return 'Configs.LkpPhysExams'; }
        protected getDialogType() { return LkpPhysExamsDialog; }
        protected getIdProperty() { return LkpPhysExamsRow.idProperty; }
        protected getLocalTextPrefix() { return LkpPhysExamsRow.localTextPrefix; }
        protected getService() { return LkpPhysExamsService.baseUrl; }

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