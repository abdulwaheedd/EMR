
namespace EMR.OPD {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class PatientHistoryDialog extends Serenity.EntityDialog<PatientHistoryRow, any> {
        protected getFormKey() { return PatientHistoryForm.formKey; }
        protected getIdProperty() { return PatientHistoryRow.idProperty; }
        protected getLocalTextPrefix() { return PatientHistoryRow.localTextPrefix; }
        protected getNameProperty() { return PatientHistoryRow.nameProperty; }
        protected getService() { return PatientHistoryService.baseUrl; }

        protected form = new PatientHistoryForm(this.idPrefix);

    }
}