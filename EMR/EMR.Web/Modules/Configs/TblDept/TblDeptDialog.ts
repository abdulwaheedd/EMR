
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblDeptDialog extends Serenity.EntityDialog<TblDeptRow, any> {
        protected getFormKey() { return TblDeptForm.formKey; }
        protected getIdProperty() { return TblDeptRow.idProperty; }
        protected getLocalTextPrefix() { return TblDeptRow.localTextPrefix; }
        protected getNameProperty() { return TblDeptRow.nameProperty; }
        protected getService() { return TblDeptService.baseUrl; }

        protected form = new TblDeptForm(this.idPrefix);

    }
}