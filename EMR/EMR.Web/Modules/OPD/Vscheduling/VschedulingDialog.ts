
namespace EMR.OPD {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class VschedulingDialog extends Serenity.EntityDialog<VschedulingRow, any> {
        protected getFormKey() { return VschedulingForm.formKey; }
        protected getIdProperty() { return VschedulingRow.idProperty; }
        protected getLocalTextPrefix() { return VschedulingRow.localTextPrefix; }
        protected getNameProperty() { return VschedulingRow.nameProperty; }
        protected getService() { return VschedulingService.baseUrl; }

        protected form = new VschedulingForm(this.idPrefix);

        constructor() {
            super();

            this.form.PlanDate.change(e => {
                this.form.SPlanDate.value = convertToShamsi(this.form.PlanDate.valueAsDate);
            });

            this.form.SPlanDate.change(e => {
                this.form.PlanDate.valueAsDate = convertToGregorian(this.form.SPlanDate.value.toString());
            });
        }
    }
}

declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;