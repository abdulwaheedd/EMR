
namespace EMR.VitalSigns {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class CyclevisitsDialog extends Serenity.EntityDialog<CyclevisitsRow, any> {
        protected getFormKey() { return CyclevisitsForm.formKey; }
        protected getIdProperty() { return CyclevisitsRow.idProperty; }
        protected getLocalTextPrefix() { return CyclevisitsRow.localTextPrefix; }
        protected getNameProperty() { return CyclevisitsRow.nameProperty; }
        protected getService() { return CyclevisitsService.baseUrl; }

        protected form = new CyclevisitsForm(this.idPrefix);

        constructor() {
            super();

            this.form.ActualDate.change(e => {
                this.form.SActualDate.value = convertToShamsi(this.form.ActualDate.valueAsDate);
            });

            this.form.SActualDate.change(e => {
                this.form.ActualDate.valueAsDate = convertToGregorian(this.form.SActualDate.value.toString());
            });

        }
    }
}

declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;