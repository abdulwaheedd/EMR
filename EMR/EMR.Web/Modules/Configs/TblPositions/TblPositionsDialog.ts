
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblPositionsDialog extends Serenity.EntityDialog<TblPositionsRow, any> {
        protected getFormKey() { return TblPositionsForm.formKey; }
        protected getIdProperty() { return TblPositionsRow.idProperty; }
        protected getLocalTextPrefix() { return TblPositionsRow.localTextPrefix; }
        protected getNameProperty() { return TblPositionsRow.nameProperty; }
        protected getService() { return TblPositionsService.baseUrl; }

        protected form = new TblPositionsForm(this.idPrefix);

    }
}