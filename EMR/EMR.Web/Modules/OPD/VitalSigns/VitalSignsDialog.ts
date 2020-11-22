
namespace EMR.OPD {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class VitalSignsDialog extends Serenity.EntityDialog<VitalSignsRow, any> {
        protected getFormKey() { return VitalSignsForm.formKey; }
        protected getIdProperty() { return VitalSignsRow.idProperty; }
        protected getLocalTextPrefix() { return VitalSignsRow.localTextPrefix; }
        protected getNameProperty() { return VitalSignsRow.nameProperty; }
        protected getService() { return VitalSignsService.baseUrl; }

        protected form = new VitalSignsForm(this.idPrefix);

        constructor() {
            super();
            var getDate = new Date();
            var todyDate = getDate.getTime();

            this.form.VitalDateTime.addValidationRule(this.uniqueName, e => {
                var newDate = this.form.VitalDateTime.valueAsDate.getTime();
                if (newDate > todyDate) {
                    return "Date cannot be bigger than today! Please correct it";
                }
                var oneday = 24 * 60 * 60 * 1000;
                var diff = Math.abs(getDate.getTime() - this.form.VitalDateTime.valueAsDate.getTime());
                var diffdays = Math.ceil(diff / oneday);
                if (diffdays > 5) {
                    return "The date is too early to enter. Pleae enter a valid date";
                }
            });

            this.form.VitalDateTime.change(e => {
                this.form.SVitalDate.value = convertToShamsi(this.form.VitalDateTime.valueAsDate);
            });

            this.form.SVitalDate.change(e => {
                this.form.VitalDateTime.valueAsDate = convertToGregorian(this.form.SVitalDate.value.toString());
            });
        }
    }
}
declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;