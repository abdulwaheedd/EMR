
namespace EMR.VitalSigns {

    @Serenity.Decorators.registerClass()
    export class SchedulingGrid extends Serenity.EntityGrid<SchedulingRow, any> {
        protected getColumnsKey() { return 'VitalSigns.Scheduling'; }
        protected getDialogType() { return SchedulingDialog; }
        protected getIdProperty() { return SchedulingRow.idProperty; }
        protected getLocalTextPrefix() { return SchedulingRow.localTextPrefix; }
        protected getService() { return SchedulingService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}