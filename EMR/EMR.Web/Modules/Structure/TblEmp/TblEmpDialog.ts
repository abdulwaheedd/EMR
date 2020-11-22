
namespace EMR.Structure {

    @Serenity.Decorators.registerClass()
    export class TblEmpDialog extends Serenity.EntityDialog<TblEmpRow, any> {
        protected getFormKey() { return TblEmpForm.formKey; }
        protected getIdProperty() { return TblEmpRow.idProperty; }
        protected getLocalTextPrefix() { return TblEmpRow.localTextPrefix; }
        protected getNameProperty() { return TblEmpRow.nameProperty; }
        protected getService() { return TblEmpService.baseUrl; }

        protected form = new TblEmpForm(this.idPrefix);

    }
}