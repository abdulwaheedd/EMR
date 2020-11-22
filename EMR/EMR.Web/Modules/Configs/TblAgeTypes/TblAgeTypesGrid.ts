
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblAgeTypesGrid extends Serenity.EntityGrid<TblAgeTypesRow, any> {
        protected getColumnsKey() { return 'Configs.TblAgeTypes'; }
        protected getDialogType() { return TblAgeTypesDialog; }
        protected getIdProperty() { return TblAgeTypesRow.idProperty; }
        protected getLocalTextPrefix() { return TblAgeTypesRow.localTextPrefix; }
        protected getService() { return TblAgeTypesService.baseUrl; }

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