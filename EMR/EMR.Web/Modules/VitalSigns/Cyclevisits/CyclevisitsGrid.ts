
namespace EMR.VitalSigns {

    @Serenity.Decorators.registerClass()
    export class CyclevisitsGrid extends Serenity.EntityGrid<CyclevisitsRow, any> {
        protected getColumnsKey() { return 'VitalSigns.Cyclevisits'; }
        protected getDialogType() { return CyclevisitsDialog; }
        protected getIdProperty() { return CyclevisitsRow.idProperty; }
        protected getLocalTextPrefix() { return CyclevisitsRow.localTextPrefix; }
        protected getService() { return CyclevisitsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}