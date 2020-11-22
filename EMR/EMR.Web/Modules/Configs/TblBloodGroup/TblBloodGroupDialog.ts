
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblBloodGroupDialog extends Serenity.EntityDialog<TblBloodGroupRow, any> {
        protected getFormKey() { return TblBloodGroupForm.formKey; }
        protected getIdProperty() { return TblBloodGroupRow.idProperty; }
        protected getLocalTextPrefix() { return TblBloodGroupRow.localTextPrefix; }
        protected getNameProperty() { return TblBloodGroupRow.nameProperty; }
        protected getService() { return TblBloodGroupService.baseUrl; }

        protected form = new TblBloodGroupForm(this.idPrefix);

    }
}