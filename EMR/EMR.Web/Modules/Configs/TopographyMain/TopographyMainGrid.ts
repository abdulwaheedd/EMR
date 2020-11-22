
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TopographyMainGrid extends Serenity.EntityGrid<TopographyMainRow, any> {
        protected getColumnsKey() { return 'Configs.TopographyMain'; }
        protected getDialogType() { return TopographyMainDialog; }
        protected getIdProperty() { return TopographyMainRow.idProperty; }
        protected getLocalTextPrefix() { return TopographyMainRow.localTextPrefix; }
        protected getService() { return TopographyMainService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}