
namespace EMR.Register {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class PatAttendantsDialog extends Serenity.EntityDialog<PatAttendantsRow, any> {
        protected getFormKey() { return PatAttendantsForm.formKey; }
        protected getIdProperty() { return PatAttendantsRow.idProperty; }
        protected getLocalTextPrefix() { return PatAttendantsRow.localTextPrefix; }
        protected getNameProperty() { return PatAttendantsRow.nameProperty; }
        protected getService() { return PatAttendantsService.baseUrl; }

        protected form = new PatAttendantsForm(this.idPrefix);

    }
}