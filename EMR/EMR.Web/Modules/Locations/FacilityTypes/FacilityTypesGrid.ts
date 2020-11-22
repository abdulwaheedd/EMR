
namespace EMR.Locations {

    @Serenity.Decorators.registerClass()
    export class FacilityTypesGrid extends Serenity.EntityGrid<FacilityTypesRow, any> {
        protected getColumnsKey() { return 'Locations.FacilityTypes'; }
        protected getDialogType() { return FacilityTypesDialog; }
        protected getIdProperty() { return FacilityTypesRow.idProperty; }
        protected getLocalTextPrefix() { return FacilityTypesRow.localTextPrefix; }
        protected getService() { return FacilityTypesService.baseUrl; }

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