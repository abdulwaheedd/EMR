
namespace EMR.Structure {

    @Serenity.Decorators.registerClass()
    export class TblEmpGrid extends Serenity.EntityGrid<TblEmpRow, any> {
        protected getColumnsKey() { return 'Structure.TblEmp'; }
        protected getDialogType() { return TblEmpDialog; }
        protected getIdProperty() { return TblEmpRow.idProperty; }
        protected getLocalTextPrefix() { return TblEmpRow.localTextPrefix; }
        protected getService() { return TblEmpService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}