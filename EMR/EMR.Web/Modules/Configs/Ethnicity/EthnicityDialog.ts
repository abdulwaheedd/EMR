
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class EthnicityDialog extends Serenity.EntityDialog<EthnicityRow, any> {
        protected getFormKey() { return EthnicityForm.formKey; }
        protected getIdProperty() { return EthnicityRow.idProperty; }
        protected getLocalTextPrefix() { return EthnicityRow.localTextPrefix; }
        protected getNameProperty() { return EthnicityRow.nameProperty; }
        protected getService() { return EthnicityService.baseUrl; }

        protected form = new EthnicityForm(this.idPrefix);

    }
}