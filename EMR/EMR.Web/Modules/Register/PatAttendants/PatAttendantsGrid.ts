
namespace EMR.Register {

    @Serenity.Decorators.registerClass()
    export class PatAttendantsGrid extends Serenity.EntityGrid<PatAttendantsRow, any> {
        protected getColumnsKey() { return 'Register.PatAttendants'; }
        protected getDialogType() { return PatAttendantsDialog; }
        protected getIdProperty() { return PatAttendantsRow.idProperty; }
        protected getLocalTextPrefix() { return PatAttendantsRow.localTextPrefix; }
        protected getService() { return PatAttendantsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}