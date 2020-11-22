
namespace EMR.Regs {
    @Serenity.Decorators.filterable()
    @Serenity.Decorators.registerClass()
    export class TblPatientNextOfKeenGrid extends Serenity.EntityGrid<TblPatientNextOfKeenRow, any> {
        protected getColumnsKey() { return 'Regs.TblPatientNextOfKeen'; }
        protected getDialogType() { return TblPatientNextOfKeenDialog; }
        protected getIdProperty() { return TblPatientNextOfKeenRow.idProperty; }
        protected getLocalTextPrefix() { return TblPatientNextOfKeenRow.localTextPrefix; }
        protected getService() { return TblPatientNextOfKeenService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}