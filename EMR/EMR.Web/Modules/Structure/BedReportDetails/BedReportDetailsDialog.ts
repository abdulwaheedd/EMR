
namespace EMR.Structure {

    @Serenity.Decorators.registerClass()
    export class BedReportDetailsDialog extends Serenity.EntityDialog<BedReportDetailsRow, any> {
        protected getFormKey() { return BedReportDetailsForm.formKey; }
        protected getIdProperty() { return BedReportDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return BedReportDetailsRow.localTextPrefix; }
        protected getNameProperty() { return BedReportDetailsRow.nameProperty; }
        protected getService() { return BedReportDetailsService.baseUrl; }

        protected form = new BedReportDetailsForm(this.idPrefix);

    }
}