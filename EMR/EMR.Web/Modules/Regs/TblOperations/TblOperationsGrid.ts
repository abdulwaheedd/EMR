
namespace EMR.Regs {
    @Serenity.Decorators.filterable()
    @Serenity.Decorators.registerClass()
    export class TblOperationsGrid extends Serenity.EntityGrid<TblOperationsRow, any> {
        protected getColumnsKey() { return 'Regs.TblOperations'; }
        protected getDialogType() { return TblOperationsDialog; }
        protected getIdProperty() { return TblOperationsRow.idProperty; }
        protected getLocalTextPrefix() { return TblOperationsRow.localTextPrefix; }
        protected getService() { return TblOperationsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}