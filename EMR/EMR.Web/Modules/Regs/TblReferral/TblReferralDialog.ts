
namespace EMR.Regs {

    @Serenity.Decorators.registerClass()
    export class TblReferralDialog extends Serenity.EntityDialog<TblReferralRow, any> {
        protected getFormKey() { return TblReferralForm.formKey; }
        protected getIdProperty() { return TblReferralRow.idProperty; }
        protected getLocalTextPrefix() { return TblReferralRow.localTextPrefix; }
        protected getNameProperty() { return TblReferralRow.nameProperty; }
        protected getService() { return TblReferralService.baseUrl; }

        protected form = new TblReferralForm(this.idPrefix);

        constructor() {
            super();

            //convert date from to Shamsi and miladi
            this.form.RefDate.change(e => {
                this.form.RefDateH.value = convertToShamsi(this.form.RefDate.valueAsDate);
            });

            this.form.RefDateH.change(e => {
                this.form.RefDate.valueAsDate = convertToGregorian(this.form.RefDateH.value.toString());
            });
        }

    }
}
declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;