
namespace EMR.OPD {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class OpdBloodTransfusionsDialog extends Serenity.EntityDialog<OpdBloodTransfusionsRow, any> {
        protected getFormKey() { return OpdBloodTransfusionsForm.formKey; }
        protected getIdProperty() { return OpdBloodTransfusionsRow.idProperty; }
        protected getLocalTextPrefix() { return OpdBloodTransfusionsRow.localTextPrefix; }
        protected getNameProperty() { return OpdBloodTransfusionsRow.nameProperty; }
        protected getService() { return OpdBloodTransfusionsService.baseUrl; }

        protected form = new OpdBloodTransfusionsForm(this.idPrefix);

        constructor() {
            super();
            var getDate = new Date();
            var todyDate = getDate.getTime();

            this.form.RecDateTime.addValidationRule(this.uniqueName, e => {
                var newDate = this.form.RecDateTime.valueAsDate.getTime();
                if (newDate > todyDate) {
                    return "Date cannot be bigger than today! Please correct it";
                }
                var oneday = 24 * 60 * 60 * 1000;
                var diff = Math.abs(getDate.getTime() - this.form.RecDateTime.valueAsDate.getTime());
                var diffdays = Math.ceil(diff / oneday);
                if (diffdays > 5) {
                    return "The date is too early to enter. Pleae enter a valid date";
                }
            });


            this.form.RecDateTime.change(e => {
                this.form.SRecDate.value = convertToShamsi(this.form.RecDateTime.valueAsDate);
            });

            this.form.SRecDate.change(e => {
                this.form.RecDateTime.valueAsDate = convertToGregorian(this.form.SRecDate.value.toString());
            });
        }
    }
}

declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;