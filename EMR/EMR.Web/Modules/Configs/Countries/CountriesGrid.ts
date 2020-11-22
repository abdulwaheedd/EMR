
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class CountriesGrid extends Serenity.EntityGrid<CountriesRow, any> {
        protected getColumnsKey() { return 'Configs.Countries'; }
        protected getDialogType() { return CountriesDialog; }
        protected getIdProperty() { return CountriesRow.idProperty; }
        protected getLocalTextPrefix() { return CountriesRow.localTextPrefix; }
        protected getService() { return CountriesService.baseUrl; }

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