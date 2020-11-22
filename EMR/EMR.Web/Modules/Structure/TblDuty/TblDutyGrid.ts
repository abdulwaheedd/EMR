
namespace EMR.Structure {

    @Serenity.Decorators.registerClass()
    export class TblDutyGrid extends Serenity.EntityGrid<TblDutyRow, any> {
        protected getColumnsKey() { return 'Structure.TblDuty'; }
        protected getDialogType() { return TblDutyDialog; }
        protected getIdProperty() { return TblDutyRow.idProperty; }
        protected getLocalTextPrefix() { return TblDutyRow.localTextPrefix; }
        protected getService() { return TblDutyService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}