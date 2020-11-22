
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblOutcomesMotherDialog extends Serenity.EntityDialog<TblOutcomesMotherRow, any> {
        protected getFormKey() { return TblOutcomesMotherForm.formKey; }
        protected getIdProperty() { return TblOutcomesMotherRow.idProperty; }
        protected getLocalTextPrefix() { return TblOutcomesMotherRow.localTextPrefix; }
        protected getNameProperty() { return TblOutcomesMotherRow.nameProperty; }
        protected getService() { return TblOutcomesMotherService.baseUrl; }

        protected form = new TblOutcomesMotherForm(this.idPrefix);

    }
}