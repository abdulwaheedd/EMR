
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblOccupationDialog extends Serenity.EntityDialog<TblOccupationRow, any> {
        protected getFormKey() { return TblOccupationForm.formKey; }
        protected getIdProperty() { return TblOccupationRow.idProperty; }
        protected getLocalTextPrefix() { return TblOccupationRow.localTextPrefix; }
        protected getNameProperty() { return TblOccupationRow.nameProperty; }
        protected getService() { return TblOccupationService.baseUrl; }

        protected form = new TblOccupationForm(this.idPrefix);

    }
}