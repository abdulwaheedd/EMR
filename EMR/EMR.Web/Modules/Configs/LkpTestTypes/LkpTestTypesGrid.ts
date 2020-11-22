
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class LkpTestTypesGrid extends Serenity.EntityGrid<LkpTestTypesRow, any> {
        protected getColumnsKey() { return 'Configs.LkpTestTypes'; }
        protected getDialogType() { return LkpTestTypesDialog; }
        protected getIdProperty() { return LkpTestTypesRow.idProperty; }
        protected getLocalTextPrefix() { return LkpTestTypesRow.localTextPrefix; }
        protected getService() { return LkpTestTypesService.baseUrl; }

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