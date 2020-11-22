
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblAbortionTypeDialog extends Serenity.EntityDialog<TblAbortionTypeRow, any> {
        protected getFormKey() { return TblAbortionTypeForm.formKey; }
        protected getIdProperty() { return TblAbortionTypeRow.idProperty; }
        protected getLocalTextPrefix() { return TblAbortionTypeRow.localTextPrefix; }
        protected getNameProperty() { return TblAbortionTypeRow.nameProperty; }
        protected getService() { return TblAbortionTypeService.baseUrl; }

        protected form = new TblAbortionTypeForm(this.idPrefix);

    }
}