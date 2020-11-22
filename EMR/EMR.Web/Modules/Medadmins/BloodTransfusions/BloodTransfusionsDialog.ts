
namespace EMR.Medadmins {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class BloodTransfusionsDialog extends Serenity.EntityDialog<BloodTransfusionsRow, any> {
        protected getFormKey() { return BloodTransfusionsForm.formKey; }
        protected getIdProperty() { return BloodTransfusionsRow.idProperty; }
        protected getLocalTextPrefix() { return BloodTransfusionsRow.localTextPrefix; }
        protected getNameProperty() { return BloodTransfusionsRow.nameProperty; }
        protected getService() { return BloodTransfusionsService.baseUrl; }

        protected form = new BloodTransfusionsForm(this.idPrefix);

        constructor() {
            super();
            var getDate = new Date();
            var todyDate = getDate.getTime();

            this.form.TransDateTime.addValidationRule(this.uniqueName, e => {
                var newDate = this.form.TransDateTime.valueAsDate.getTime();
                if (newDate > todyDate) {
                    return "Date cannot be bigger than today! Please correct it";
                }
                var oneday = 24 * 60 * 60 * 1000;
                var diff = Math.abs(getDate.getTime() - this.form.TransDateTime.valueAsDate.getTime());
                var diffdays = Math.ceil(diff / oneday);
                if (diffdays > 5) {
                    return "The date is too early to enter. Pleae enter a valid date";
                }
            });


            this.form.TransDateTime.change(e => {
                this.form.STransDate.value = convertToShamsi(this.form.TransDateTime.valueAsDate);
            });

            this.form.STransDate.change(e => {
                this.form.TransDateTime.valueAsDate = convertToGregorian(this.form.STransDate.value.toString());
            });
        }
    }
}
declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;