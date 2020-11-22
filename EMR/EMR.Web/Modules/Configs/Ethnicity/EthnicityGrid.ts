
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class EthnicityGrid extends Serenity.EntityGrid<EthnicityRow, any> {
        protected getColumnsKey() { return 'Configs.Ethnicity'; }
        protected getDialogType() { return EthnicityDialog; }
        protected getIdProperty() { return EthnicityRow.idProperty; }
        protected getLocalTextPrefix() { return EthnicityRow.localTextPrefix; }
        protected getService() { return EthnicityService.baseUrl; }

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