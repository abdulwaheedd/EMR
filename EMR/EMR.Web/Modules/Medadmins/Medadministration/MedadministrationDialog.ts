
namespace EMR.Medadmins {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class MedadministrationDialog extends Serenity.EntityDialog<MedadministrationRow, any> {
        protected getFormKey() { return MedadministrationForm.formKey; }
        protected getIdProperty() { return MedadministrationRow.idProperty; }
        protected getLocalTextPrefix() { return MedadministrationRow.localTextPrefix; }
        protected getNameProperty() { return MedadministrationRow.nameProperty; }
        protected getService() { return MedadministrationService.baseUrl; }

        protected form = new MedadministrationForm(this.idPrefix);
        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);

            // We could also remove delete button here, but for demonstration 
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);

            return buttons;
        }

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