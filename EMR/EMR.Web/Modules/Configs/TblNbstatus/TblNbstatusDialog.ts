
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblNbstatusDialog extends Serenity.EntityDialog<TblNbstatusRow, any> {
        protected getFormKey() { return TblNbstatusForm.formKey; }
        protected getIdProperty() { return TblNbstatusRow.idProperty; }
        protected getLocalTextPrefix() { return TblNbstatusRow.localTextPrefix; }
        protected getNameProperty() { return TblNbstatusRow.nameProperty; }
        protected getService() { return TblNbstatusService.baseUrl; }

        protected form = new TblNbstatusForm(this.idPrefix);

    }
}