
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class CaretypesDialog extends Serenity.EntityDialog<CaretypesRow, any> {
        protected getFormKey() { return CaretypesForm.formKey; }
        protected getIdProperty() { return CaretypesRow.idProperty; }
        protected getLocalTextPrefix() { return CaretypesRow.localTextPrefix; }
        protected getNameProperty() { return CaretypesRow.nameProperty; }
        protected getService() { return CaretypesService.baseUrl; }

        protected form = new CaretypesForm(this.idPrefix);

    }
}