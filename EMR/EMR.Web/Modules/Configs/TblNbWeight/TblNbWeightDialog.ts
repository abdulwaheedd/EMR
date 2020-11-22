
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblNbWeightDialog extends Serenity.EntityDialog<TblNbWeightRow, any> {
        protected getFormKey() { return TblNbWeightForm.formKey; }
        protected getIdProperty() { return TblNbWeightRow.idProperty; }
        protected getLocalTextPrefix() { return TblNbWeightRow.localTextPrefix; }
        protected getNameProperty() { return TblNbWeightRow.nameProperty; }
        protected getService() { return TblNbWeightService.baseUrl; }

        protected form = new TblNbWeightForm(this.idPrefix);

    }
}