
namespace EMR.Structure {

    @Serenity.Decorators.registerClass()
    export class TblDutyDialog extends Serenity.EntityDialog<TblDutyRow, any> {
        protected getFormKey() { return TblDutyForm.formKey; }
        protected getIdProperty() { return TblDutyRow.idProperty; }
        protected getLocalTextPrefix() { return TblDutyRow.localTextPrefix; }
        protected getNameProperty() { return TblDutyRow.nameProperty; }
        protected getService() { return TblDutyService.baseUrl; }

        protected form = new TblDutyForm(this.idPrefix);

    }
}