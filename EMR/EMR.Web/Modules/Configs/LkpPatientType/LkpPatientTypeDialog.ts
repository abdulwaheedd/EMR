
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class LkpPatientTypeDialog extends Serenity.EntityDialog<LkpPatientTypeRow, any> {
        protected getFormKey() { return LkpPatientTypeForm.formKey; }
        protected getIdProperty() { return LkpPatientTypeRow.idProperty; }
        protected getLocalTextPrefix() { return LkpPatientTypeRow.localTextPrefix; }
        protected getNameProperty() { return LkpPatientTypeRow.nameProperty; }
        protected getService() { return LkpPatientTypeService.baseUrl; }

        protected form = new LkpPatientTypeForm(this.idPrefix);

    }
}