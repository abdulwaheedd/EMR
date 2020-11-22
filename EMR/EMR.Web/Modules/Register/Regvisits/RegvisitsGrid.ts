
namespace EMR.Register {

    @Serenity.Decorators.registerClass()
    export class RegvisitsGrid extends Serenity.EntityGrid<RegvisitsRow, any> {
        protected getColumnsKey() { return 'Register.Regvisits'; }
        protected getDialogType() { return RegvisitsDialog; }
        protected getIdProperty() { return RegvisitsRow.idProperty; }
        protected getLocalTextPrefix() { return RegvisitsRow.localTextPrefix; }
        protected getService() { return RegvisitsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}