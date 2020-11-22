
namespace EMR.OPD {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class PhysicalExaminationDialog extends Serenity.EntityDialog<PhysicalExaminationRow, any> {
        protected getFormKey() { return PhysicalExaminationForm.formKey; }
        protected getIdProperty() { return PhysicalExaminationRow.idProperty; }
        protected getLocalTextPrefix() { return PhysicalExaminationRow.localTextPrefix; }
        protected getNameProperty() { return PhysicalExaminationRow.nameProperty; }
        protected getService() { return PhysicalExaminationService.baseUrl; }

        protected form = new PhysicalExaminationForm(this.idPrefix);

    }
}