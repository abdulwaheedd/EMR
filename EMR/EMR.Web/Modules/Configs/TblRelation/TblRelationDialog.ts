
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblRelationDialog extends Serenity.EntityDialog<TblRelationRow, any> {
        protected getFormKey() { return TblRelationForm.formKey; }
        protected getIdProperty() { return TblRelationRow.idProperty; }
        protected getLocalTextPrefix() { return TblRelationRow.localTextPrefix; }
        protected getNameProperty() { return TblRelationRow.nameProperty; }
        protected getService() { return TblRelationService.baseUrl; }

        protected form = new TblRelationForm(this.idPrefix);

    }
}