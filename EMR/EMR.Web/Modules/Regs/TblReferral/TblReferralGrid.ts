
namespace EMR.Regs {
    @Serenity.Decorators.filterable()
    @Serenity.Decorators.registerClass()
    export class TblReferralGrid extends Serenity.EntityGrid<TblReferralRow, any> {
        protected getColumnsKey() { return 'Regs.TblReferral'; }
        protected getDialogType() { return TblReferralDialog; }
        protected getIdProperty() { return TblReferralRow.idProperty; }
        protected getLocalTextPrefix() { return TblReferralRow.localTextPrefix; }
        protected getService() { return TblReferralService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}