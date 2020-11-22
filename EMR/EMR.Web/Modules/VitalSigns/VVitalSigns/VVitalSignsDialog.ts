
namespace EMR.VitalSigns {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class VVitalSignsDialog extends Serenity.EntityDialog<VVitalSignsRow, any> {
        protected getFormKey() { return VVitalSignsForm.formKey; }
        protected getIdProperty() { return VVitalSignsRow.idProperty; }
        protected getLocalTextPrefix() { return VVitalSignsRow.localTextPrefix; }
        protected getNameProperty() { return VVitalSignsRow.nameProperty; }
        protected getService() { return VVitalSignsService.baseUrl; }

        protected form = new VVitalSignsForm(this.idPrefix);

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