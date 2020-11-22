
namespace EMR.Regs {
    @Serenity.Decorators.filterable()
    @Serenity.Decorators.registerClass()
    export class TblPatientsGrid extends Serenity.EntityGrid<TblPatientsRow, any> {
        protected getColumnsKey() { return 'Regs.TblPatients'; }
        protected getDialogType() { return TblPatientsDialog; }
        protected getIdProperty() { return TblPatientsRow.idProperty; }
        protected getLocalTextPrefix() { return TblPatientsRow.localTextPrefix; }
        protected getService() { return TblPatientsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}