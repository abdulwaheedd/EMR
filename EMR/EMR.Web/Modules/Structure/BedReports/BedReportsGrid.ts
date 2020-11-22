
namespace EMR.Structure {

    @Serenity.Decorators.registerClass()
    export class BedReportsGrid extends Serenity.EntityGrid<BedReportsRow, any> {
        protected getColumnsKey() { return 'Structure.BedReports'; }
        protected getDialogType() { return BedReportsDialog; }
        protected getIdProperty() { return BedReportsRow.idProperty; }
        protected getLocalTextPrefix() { return BedReportsRow.localTextPrefix; }
        protected getService() { return BedReportsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}