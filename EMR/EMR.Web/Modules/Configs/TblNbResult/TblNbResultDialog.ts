
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblNbResultDialog extends Serenity.EntityDialog<TblNbResultRow, any> {
        protected getFormKey() { return TblNbResultForm.formKey; }
        protected getIdProperty() { return TblNbResultRow.idProperty; }
        protected getLocalTextPrefix() { return TblNbResultRow.localTextPrefix; }
        protected getNameProperty() { return TblNbResultRow.nameProperty; }
        protected getService() { return TblNbResultService.baseUrl; }

        protected form = new TblNbResultForm(this.idPrefix);

    }
}