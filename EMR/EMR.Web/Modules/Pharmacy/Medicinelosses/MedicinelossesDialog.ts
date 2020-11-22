
namespace EMR.Pharmacy {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class MedicinelossesDialog extends Serenity.EntityDialog<MedicinelossesRow, any> {
        protected getFormKey() { return MedicinelossesForm.formKey; }
        protected getIdProperty() { return MedicinelossesRow.idProperty; }
        protected getLocalTextPrefix() { return MedicinelossesRow.localTextPrefix; }
        protected getService() { return MedicinelossesService.baseUrl; }

        protected form = new MedicinelossesForm(this.idPrefix);

    }
}