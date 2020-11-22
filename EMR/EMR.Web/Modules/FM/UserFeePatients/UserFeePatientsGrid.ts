
namespace EMR.FM {

    @Serenity.Decorators.registerClass()
    export class UserFeePatientsGrid extends Serenity.EntityGrid<UserFeePatientsRow, any> {
        protected getColumnsKey() { return 'FM.UserFeePatients'; }
        protected getDialogType() { return UserFeePatientsDialog; }
        protected getIdProperty() { return UserFeePatientsRow.idProperty; }
        protected getLocalTextPrefix() { return UserFeePatientsRow.localTextPrefix; }
        protected getService() { return UserFeePatientsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}