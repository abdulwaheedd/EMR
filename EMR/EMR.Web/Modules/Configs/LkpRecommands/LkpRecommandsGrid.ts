
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class LkpRecommandsGrid extends Serenity.EntityGrid<LkpRecommandsRow, any> {
        protected getColumnsKey() { return 'Configs.LkpRecommands'; }
        protected getDialogType() { return LkpRecommandsDialog; }
        protected getIdProperty() { return LkpRecommandsRow.idProperty; }
        protected getLocalTextPrefix() { return LkpRecommandsRow.localTextPrefix; }
        protected getService() { return LkpRecommandsService.baseUrl; }

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