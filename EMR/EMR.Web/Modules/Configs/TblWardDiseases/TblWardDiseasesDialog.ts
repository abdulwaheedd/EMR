
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblWardDiseasesDialog extends Serenity.EntityDialog<TblWardDiseasesRow, any> {
        protected getFormKey() { return TblWardDiseasesForm.formKey; }
        protected getIdProperty() { return TblWardDiseasesRow.idProperty; }
        protected getLocalTextPrefix() { return TblWardDiseasesRow.localTextPrefix; }
        protected getNameProperty() { return TblWardDiseasesRow.nameProperty; }
        protected getService() { return TblWardDiseasesService.baseUrl; }

        protected form = new TblWardDiseasesForm(this.idPrefix);

    }
}