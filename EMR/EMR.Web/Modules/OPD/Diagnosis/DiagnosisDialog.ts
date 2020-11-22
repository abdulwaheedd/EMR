
namespace EMR.OPD {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class DiagnosisDialog extends Serenity.EntityDialog<DiagnosisRow, any> {
        protected getFormKey() { return DiagnosisForm.formKey; }
        protected getIdProperty() { return DiagnosisRow.idProperty; }
        protected getLocalTextPrefix() { return DiagnosisRow.localTextPrefix; }
        protected getService() { return DiagnosisService.baseUrl; }

        protected form = new DiagnosisForm(this.idPrefix);

    }
}