
namespace EMR.Regs {

    @Serenity.Decorators.registerClass()
    export class TblPatDetailsDialog extends Serenity.EntityDialog<TblPatDetailsRow, any> {
        protected getFormKey() { return TblPatDetailsForm.formKey; }
        protected getIdProperty() { return TblPatDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return TblPatDetailsRow.localTextPrefix; }
        protected getNameProperty() { return TblPatDetailsRow.nameProperty; }
        protected getService() { return TblPatDetailsService.baseUrl; }

        protected form = new TblPatDetailsForm(this.idPrefix);
        constructor() {
            super();
            var getDate = new Date();
            var todyDate = getDate.getTime();

            this.form.PatDdate.addValidationRule(this.uniqueName, e => {
                var newDate = this.form.PatDdate.valueAsDate.getTime();
                if (newDate > todyDate) {
                    return "Date cannot be bigger than today! Please correct it";
                }
                var oneday = 24 * 60 * 60 * 1000;
                var diff = Math.abs(getDate.getTime() - this.form.PatDdate.valueAsDate.getTime());
                var diffdays = Math.ceil(diff / oneday);
                if (diffdays>41) {
                    return "The date is too early to enter. Pleae enter a valid date";
                }
            });

            this.form.PatDdate.change(e => {
                this.form.PatDdateH.value = convertToShamsi(this.form.PatDdate.valueAsDate);
            });

            this.form.PatDdateH.change(e => {
                this.form.PatDdate.valueAsDate = convertToGregorian(this.form.PatDdateH.value.toString());
            });

        }

    }
}
declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;

