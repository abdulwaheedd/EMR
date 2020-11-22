
namespace EMR.Locations {
    @Serenity.Decorators.filterable()
    @Serenity.Decorators.registerClass()
    export class FacilityInfoGrid extends Serenity.EntityGrid<FacilityInfoRow, any> {
        protected getColumnsKey() { return 'Locations.FacilityInfo'; }
        protected getDialogType() { return FacilityInfoDialog; }
        protected getIdProperty() { return FacilityInfoRow.idProperty; }
        protected getLocalTextPrefix() { return FacilityInfoRow.localTextPrefix; }
        protected getService() { return FacilityInfoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

    }
}