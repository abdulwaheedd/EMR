
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblWardDialog extends Serenity.EntityDialog<TblWardRow, any> {
        protected getFormKey() { return TblWardForm.formKey; }
        protected getIdProperty() { return TblWardRow.idProperty; }
        protected getLocalTextPrefix() { return TblWardRow.localTextPrefix; }
        protected getNameProperty() { return TblWardRow.nameProperty; }
        protected getService() { return TblWardService.baseUrl; }

        protected form = new TblWardForm(this.idPrefix);

    }
}