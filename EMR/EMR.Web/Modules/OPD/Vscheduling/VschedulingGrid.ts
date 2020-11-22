
namespace EMR.OPD {

    @Serenity.Decorators.registerClass()
    export class VschedulingGrid extends Serenity.EntityGrid<VschedulingRow, any> {
        protected getColumnsKey() { return 'OPD.Vscheduling'; }
        protected getDialogType() { return VschedulingDialog; }
        protected getIdProperty() { return VschedulingRow.idProperty; }
        protected getLocalTextPrefix() { return VschedulingRow.localTextPrefix; }
        protected getService() { return VschedulingService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}