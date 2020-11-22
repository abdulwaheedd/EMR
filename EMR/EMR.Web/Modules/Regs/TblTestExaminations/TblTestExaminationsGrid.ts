
namespace EMR.Regs {
    @Serenity.Decorators.filterable()
    @Serenity.Decorators.registerClass()
    export class TblTestExaminationsGrid extends Serenity.EntityGrid<TblTestExaminationsRow, any> {
        protected getColumnsKey() { return 'Regs.TblTestExaminations'; }
        protected getDialogType() { return TblTestExaminationsDialog; }
        protected getIdProperty() { return TblTestExaminationsRow.idProperty; }
        protected getLocalTextPrefix() { return TblTestExaminationsRow.localTextPrefix; }
        protected getService() { return TblTestExaminationsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}