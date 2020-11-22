
namespace EMR.Administration {

    @Serenity.Decorators.registerClass()
    export class DashboardUrlDialog extends Serenity.EntityDialog<DashboardUrlRow, any> {
        protected getFormKey() { return DashboardUrlForm.formKey; }
        protected getIdProperty() { return DashboardUrlRow.idProperty; }
        protected getLocalTextPrefix() { return DashboardUrlRow.localTextPrefix; }
        protected getNameProperty() { return DashboardUrlRow.nameProperty; }
        protected getService() { return DashboardUrlService.baseUrl; }

        protected form = new DashboardUrlForm(this.idPrefix);

    }
}