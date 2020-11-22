
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblDiagnosisDialog extends Serenity.EntityDialog<TblDiagnosisRow, any> {
        protected getFormKey() { return TblDiagnosisForm.formKey; }
        protected getIdProperty() { return TblDiagnosisRow.idProperty; }
        protected getLocalTextPrefix() { return TblDiagnosisRow.localTextPrefix; }
        protected getNameProperty() { return TblDiagnosisRow.nameProperty; }
        protected getService() { return TblDiagnosisService.baseUrl; }

        protected form = new TblDiagnosisForm(this.idPrefix);

    }
}