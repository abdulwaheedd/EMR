
namespace EMR.OPD {

    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class OpdMedadministrationDialog extends Serenity.EntityDialog<OpdMedadministrationRow, any> {
        protected getFormKey() { return OpdMedadministrationForm.formKey; }
        protected getIdProperty() { return OpdMedadministrationRow.idProperty; }
        protected getLocalTextPrefix() { return OpdMedadministrationRow.localTextPrefix; }
        protected getNameProperty() { return OpdMedadministrationRow.nameProperty; }
        protected getService() { return OpdMedadministrationService.baseUrl; }

        protected form = new OpdMedadministrationForm(this.idPrefix);

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

            this.form.AppDateTime.addValidationRule(this.uniqueName, e => {
                var newDate = this.form.AppDateTime.valueAsDate.getTime();
                if (newDate > todyDate) {
                    return "Date cannot be bigger than today! Please correct it";
                }
                var oneday = 24 * 60 * 60 * 1000;
                var diff = Math.abs(getDate.getTime() - this.form.AppDateTime.valueAsDate.getTime());
                var diffdays = Math.ceil(diff / oneday);
                if (diffdays > 5) {
                    return "The date is too early to enter. Pleae enter a valid date";
                }
            });

            this.form.RecDateTime.change(e => {
                this.form.RecSDate.value = convertToShamsi(this.form.RecDateTime.valueAsDate);
            });

            this.form.RecSDate.change(e => {
                this.form.RecDateTime.valueAsDate = convertToGregorian(this.form.RecSDate.value.toString());
            });

            this.form.AppDateTime.change(e => {
                this.form.AppSDate.value = convertToShamsi(this.form.AppDateTime.valueAsDate);
            });

            this.form.AppSDate.change(e => {
                this.form.AppDateTime.valueAsDate = convertToGregorian(this.form.AppSDate.value.toString());
            });
        }
    }
}
declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;