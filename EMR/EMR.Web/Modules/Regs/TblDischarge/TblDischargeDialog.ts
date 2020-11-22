
namespace EMR.Regs {

    @Serenity.Decorators.registerClass()
    export class TblDischargeDialog extends Serenity.EntityDialog<TblDischargeRow, any> {
        protected getFormKey() { return TblDischargeForm.formKey; }
        protected getIdProperty() { return TblDischargeRow.idProperty; }
        protected getLocalTextPrefix() { return TblDischargeRow.localTextPrefix; }
        protected getNameProperty() { return TblDischargeRow.nameProperty; }
        protected getService() { return TblDischargeService.baseUrl; }

        protected form = new TblDischargeForm(this.idPrefix);

    }
}