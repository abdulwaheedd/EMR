
namespace EMR.Regs {

    @Serenity.Decorators.registerClass()
    export class TblNewBornManagementDialog extends Serenity.EntityDialog<TblNewBornManagementRow, any> {
        protected getFormKey() { return TblNewBornManagementForm.formKey; }
        protected getIdProperty() { return TblNewBornManagementRow.idProperty; }
        protected getLocalTextPrefix() { return TblNewBornManagementRow.localTextPrefix; }
        protected getNameProperty() { return TblNewBornManagementRow.nameProperty; }
        protected getService() { return TblNewBornManagementService.baseUrl; }

        protected form = new TblNewBornManagementForm(this.idPrefix);

    }
}