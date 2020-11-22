
namespace EMR.OPD {

    @Serenity.Decorators.registerClass()
    export class OpdBloodTransfusionsGrid extends Serenity.EntityGrid<OpdBloodTransfusionsRow, any> {
        protected getColumnsKey() { return 'OPD.OpdBloodTransfusions'; }
        protected getDialogType() { return OpdBloodTransfusionsDialog; }
        protected getIdProperty() { return OpdBloodTransfusionsRow.idProperty; }
        protected getLocalTextPrefix() { return OpdBloodTransfusionsRow.localTextPrefix; }
        protected getService() { return OpdBloodTransfusionsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}