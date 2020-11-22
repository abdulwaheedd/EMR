
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblGenderDialog extends Serenity.EntityDialog<TblGenderRow, any> {
        protected getFormKey() { return TblGenderForm.formKey; }
        protected getIdProperty() { return TblGenderRow.idProperty; }
        protected getLocalTextPrefix() { return TblGenderRow.localTextPrefix; }
        protected getNameProperty() { return TblGenderRow.nameProperty; }
        protected getService() { return TblGenderService.baseUrl; }

        protected form = new TblGenderForm(this.idPrefix);

    }
}