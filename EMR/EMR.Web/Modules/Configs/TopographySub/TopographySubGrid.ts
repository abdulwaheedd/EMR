
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TopographySubGrid extends Serenity.EntityGrid<TopographySubRow, any> {
        protected getColumnsKey() { return 'Configs.TopographySub'; }
        protected getDialogType() { return TopographySubDialog; }
        protected getIdProperty() { return TopographySubRow.idProperty; }
        protected getLocalTextPrefix() { return TopographySubRow.localTextPrefix; }
        protected getService() { return TopographySubService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}