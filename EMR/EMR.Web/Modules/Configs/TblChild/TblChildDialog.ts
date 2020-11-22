
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblChildDialog extends Serenity.EntityDialog<TblChildRow, any> {
        protected getFormKey() { return TblChildForm.formKey; }
        protected getIdProperty() { return TblChildRow.idProperty; }
        protected getLocalTextPrefix() { return TblChildRow.localTextPrefix; }
        protected getNameProperty() { return TblChildRow.nameProperty; }
        protected getService() { return TblChildService.baseUrl; }

        protected form = new TblChildForm(this.idPrefix);

    }
}