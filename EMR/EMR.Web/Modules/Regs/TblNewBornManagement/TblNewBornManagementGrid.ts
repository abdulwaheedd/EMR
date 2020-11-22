
namespace EMR.Regs {
    @Serenity.Decorators.filterable()
    @Serenity.Decorators.registerClass()
    export class TblNewBornManagementGrid extends Serenity.EntityGrid<TblNewBornManagementRow, any> {
        protected getColumnsKey() { return 'Regs.TblNewBornManagement'; }
        protected getDialogType() { return TblNewBornManagementDialog; }
        protected getIdProperty() { return TblNewBornManagementRow.idProperty; }
        protected getLocalTextPrefix() { return TblNewBornManagementRow.localTextPrefix; }
        protected getService() { return TblNewBornManagementService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}