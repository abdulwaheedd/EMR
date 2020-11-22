
namespace EMR.LabTest {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class LabTestsDialog extends Serenity.EntityDialog<LabTestsRow, any> {
        protected getFormKey() { return LabTestsForm.formKey; }
        protected getIdProperty() { return LabTestsRow.idProperty; }
        protected getLocalTextPrefix() { return LabTestsRow.localTextPrefix; }
        protected getNameProperty() { return LabTestsRow.nameProperty; }
        protected getService() { return LabTestsService.baseUrl; }

        protected form = new LabTestsForm(this.idPrefix);

        constructor() {
            super();
            var getDate = new Date();
            var todyDate = getDate.getTime();

            this.form.LabDateTime.addValidationRule(this.uniqueName, e => {
                var newDate = this.form.LabDateTime.valueAsDate.getTime();
                if (newDate > todyDate) {
                    return "Date cannot be bigger than today! Please correct it";
                }
                var oneday = 24 * 60 * 60 * 1000;
                var diff = Math.abs(getDate.getTime() - this.form.LabDateTime.valueAsDate.getTime());
                var diffdays = Math.ceil(diff / oneday);
                if (diffdays > 5) {
                    return "The date is too early to enter. Pleae enter a valid date";
                }
            });

            this.form.LabDateTime.change(e => {
                this.form.SlabDate.value = convertToShamsi(this.form.LabDateTime.valueAsDate);
            });

            this.form.SlabDate.change(e => {
                this.form.LabDateTime.valueAsDate = convertToGregorian(this.form.SlabDate.value.toString());
            });
        }
    }
}


declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;