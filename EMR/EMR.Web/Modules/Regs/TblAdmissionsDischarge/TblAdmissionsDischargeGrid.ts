
namespace EMR.Regs {

    @Serenity.Decorators.registerClass()
    export class TblAdmissionsDischargeGrid extends Serenity.EntityGrid<TblAdmissionsDischargeRow, any> {
        protected getColumnsKey() { return 'Regs.TblAdmissionsDischarge'; }
        protected getDialogType() { return TblAdmissionsDischargeDialog; }
        protected getIdProperty() { return TblAdmissionsDischargeRow.idProperty; }
        protected getLocalTextPrefix() { return TblAdmissionsDischargeRow.localTextPrefix; }
        protected getService() { return TblAdmissionsDischargeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}