
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace EMR.Structure {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class BedReportDetailsEditorDialog extends Common.GridEditorDialog<BedReportDetailsRow> {
        protected getFormKey() { return BedReportDetailsForm.formKey; }
        protected getLocalTextPrefix() { return BedReportDetailsRow.localTextPrefix; }
        protected form = new BedReportDetailsForm(this.idPrefix);
    }
}