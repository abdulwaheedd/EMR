
namespace EMR.Regs {
    @Serenity.Decorators.filterable()
    @Serenity.Decorators.registerClass()
    export class TblDischargeGrid extends Serenity.EntityGrid<TblDischargeRow, any> {
        protected getColumnsKey() { return 'Regs.TblDischarge'; }
        protected getDialogType() { return TblDischargeDialog; }
        protected getIdProperty() { return TblDischargeRow.idProperty; }
        protected getLocalTextPrefix() { return TblDischargeRow.localTextPrefix; }
        protected getService() { return TblDischargeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}