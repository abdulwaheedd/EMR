
namespace EMR.Locations {

    @Serenity.Decorators.registerClass()
    export class DistrictsGrid extends Serenity.EntityGrid<DistrictsRow, any> {
        protected getColumnsKey() { return 'Locations.Districts'; }
        protected getDialogType() { return DistrictsDialog; }
        protected getIdProperty() { return DistrictsRow.idProperty; }
        protected getLocalTextPrefix() { return DistrictsRow.localTextPrefix; }
        protected getService() { return DistrictsService.baseUrl; }

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