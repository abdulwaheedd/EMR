
namespace EMR.Medadmins {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class VisitsmedicineDialog extends Serenity.EntityDialog<VisitsmedicineRow, any> {
        protected getFormKey() { return VisitsmedicineForm.formKey; }
        protected getIdProperty() { return VisitsmedicineRow.idProperty; }
        protected getLocalTextPrefix() { return VisitsmedicineRow.localTextPrefix; }
        protected getNameProperty() { return VisitsmedicineRow.nameProperty; }
        protected getService() { return VisitsmedicineService.baseUrl; }

        protected form = new VisitsmedicineForm(this.idPrefix);

    }
}