
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblDiseasesCategoryDialog extends Serenity.EntityDialog<TblDiseasesCategoryRow, any> {
        protected getFormKey() { return TblDiseasesCategoryForm.formKey; }
        protected getIdProperty() { return TblDiseasesCategoryRow.idProperty; }
        protected getLocalTextPrefix() { return TblDiseasesCategoryRow.localTextPrefix; }
        protected getNameProperty() { return TblDiseasesCategoryRow.nameProperty; }
        protected getService() { return TblDiseasesCategoryService.baseUrl; }

        protected form = new TblDiseasesCategoryForm(this.idPrefix);

    }
}