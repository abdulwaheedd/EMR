
namespace EMR.Medadmins {

    @Serenity.Decorators.registerClass()
    export class VisitsmedicineGrid extends Serenity.EntityGrid<VisitsmedicineRow, any> {
        protected getColumnsKey() { return 'Medadmins.Visitsmedicine'; }
        protected getDialogType() { return VisitsmedicineDialog; }
        protected getIdProperty() { return VisitsmedicineRow.idProperty; }
        protected getLocalTextPrefix() { return VisitsmedicineRow.localTextPrefix; }
        protected getService() { return VisitsmedicineService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}