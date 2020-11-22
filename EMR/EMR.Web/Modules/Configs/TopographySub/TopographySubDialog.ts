
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TopographySubDialog extends Serenity.EntityDialog<TopographySubRow, any> {
        protected getFormKey() { return TopographySubForm.formKey; }
        protected getIdProperty() { return TopographySubRow.idProperty; }
        protected getLocalTextPrefix() { return TopographySubRow.localTextPrefix; }
        protected getNameProperty() { return TopographySubRow.nameProperty; }
        protected getService() { return TopographySubService.baseUrl; }

        protected form = new TopographySubForm(this.idPrefix);

    }
}