
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblDiseasesCategoryGrid extends Serenity.EntityGrid<TblDiseasesCategoryRow, any> {
        protected getColumnsKey() { return 'Configs.TblDiseasesCategory'; }
        protected getDialogType() { return TblDiseasesCategoryDialog; }
        protected getIdProperty() { return TblDiseasesCategoryRow.idProperty; }
        protected getLocalTextPrefix() { return TblDiseasesCategoryRow.localTextPrefix; }
        protected getService() { return TblDiseasesCategoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "column-picker-button"), 1);
            return buttons;
        }
    }
}