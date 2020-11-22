
namespace EMR.Structure {

    @Serenity.Decorators.registerClass()
    export class BedReportDetailsGrid extends Serenity.EntityGrid<BedReportDetailsRow, any> {
        protected getColumnsKey() { return 'Structure.BedReportDetails'; }
        protected getDialogType() { return BedReportDetailsDialog; }
        protected getIdProperty() { return BedReportDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return BedReportDetailsRow.localTextPrefix; }
        protected getService() { return BedReportDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}