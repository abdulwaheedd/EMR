
namespace EMR.Regs {

    @Serenity.Decorators.registerClass()
    export class TblPatientNextOfKeenDialog extends Serenity.EntityDialog<TblPatientNextOfKeenRow, any> {
        protected getFormKey() { return TblPatientNextOfKeenForm.formKey; }
        protected getIdProperty() { return TblPatientNextOfKeenRow.idProperty; }
        protected getLocalTextPrefix() { return TblPatientNextOfKeenRow.localTextPrefix; }
        protected getNameProperty() { return TblPatientNextOfKeenRow.nameProperty; }
        protected getService() { return TblPatientNextOfKeenService.baseUrl; }

        protected form = new TblPatientNextOfKeenForm(this.idPrefix);

    }
}