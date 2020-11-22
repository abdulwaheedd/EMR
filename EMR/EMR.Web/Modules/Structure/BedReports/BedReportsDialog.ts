
namespace EMR.Structure {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class BedReportsDialog extends Serenity.EntityDialog<BedReportsRow, any> {
        protected getFormKey() { return BedReportsForm.formKey; }
        protected getIdProperty() { return BedReportsRow.idProperty; }
        protected getLocalTextPrefix() { return BedReportsRow.localTextPrefix; }
        protected getNameProperty() { return BedReportsRow.nameProperty; }
        protected getService() { return BedReportsService.baseUrl; }

        protected form = new BedReportsForm(this.idPrefix);

    }
}