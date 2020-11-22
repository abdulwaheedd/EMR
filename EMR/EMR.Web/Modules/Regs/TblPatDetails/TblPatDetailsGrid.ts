
namespace EMR.Regs {
    @Serenity.Decorators.filterable()
    @Serenity.Decorators.registerClass()
    export class TblPatDetailsGrid extends Serenity.EntityGrid<TblPatDetailsRow, any> {
        protected getColumnsKey() { return 'Regs.TblPatDetails'; }
        protected getDialogType() { return TblPatDetailsDialog; }
        protected getIdProperty() { return TblPatDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return TblPatDetailsRow.localTextPrefix; }
        protected getService() { return TblPatDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}