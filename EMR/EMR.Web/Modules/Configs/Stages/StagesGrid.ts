
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class StagesGrid extends Serenity.EntityGrid<StagesRow, any> {
        protected getColumnsKey() { return 'Configs.Stages'; }
        protected getDialogType() { return StagesDialog; }
        protected getIdProperty() { return StagesRow.idProperty; }
        protected getLocalTextPrefix() { return StagesRow.localTextPrefix; }
        protected getService() { return StagesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}