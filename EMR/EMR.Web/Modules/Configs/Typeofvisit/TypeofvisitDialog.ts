
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TypeofvisitDialog extends Serenity.EntityDialog<TypeofvisitRow, any> {
        protected getFormKey() { return TypeofvisitForm.formKey; }
        protected getIdProperty() { return TypeofvisitRow.idProperty; }
        protected getLocalTextPrefix() { return TypeofvisitRow.localTextPrefix; }
        protected getNameProperty() { return TypeofvisitRow.nameProperty; }
        protected getService() { return TypeofvisitService.baseUrl; }

        protected form = new TypeofvisitForm(this.idPrefix);

    }
}