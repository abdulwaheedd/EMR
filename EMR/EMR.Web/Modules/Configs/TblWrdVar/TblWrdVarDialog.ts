
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblWrdVarDialog extends Serenity.EntityDialog<TblWrdVarRow, any> {
        protected getFormKey() { return TblWrdVarForm.formKey; }
        protected getIdProperty() { return TblWrdVarRow.idProperty; }
        protected getLocalTextPrefix() { return TblWrdVarRow.localTextPrefix; }
        protected getNameProperty() { return TblWrdVarRow.nameProperty; }
        protected getService() { return TblWrdVarService.baseUrl; }

        protected form = new TblWrdVarForm(this.idPrefix);

    }
}