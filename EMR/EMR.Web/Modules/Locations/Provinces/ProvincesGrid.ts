
namespace EMR.Locations {

    @Serenity.Decorators.registerClass()
    export class ProvincesGrid extends Serenity.EntityGrid<ProvincesRow, any> {
        protected getColumnsKey() { return 'Locations.Provinces'; }
        protected getDialogType() { return ProvincesDialog; }
        protected getIdProperty() { return ProvincesRow.idProperty; }
        protected getLocalTextPrefix() { return ProvincesRow.localTextPrefix; }
        protected getService() { return ProvincesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}