
namespace EMR.Administration {

    @Serenity.Decorators.registerClass()
    export class DashboardUrlGrid extends Serenity.EntityGrid<DashboardUrlRow, any> {
        protected getColumnsKey() { return 'Administration.DashboardUrl'; }
        protected getDialogType() { return DashboardUrlDialog; }
        protected getIdProperty() { return DashboardUrlRow.idProperty; }
        protected getLocalTextPrefix() { return DashboardUrlRow.localTextPrefix; }
        protected getService() { return DashboardUrlService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}