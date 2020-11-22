
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblCaseTypesGrid extends Serenity.EntityGrid<TblCaseTypesRow, any> {
        protected getColumnsKey() { return 'Configs.TblCaseTypes'; }
        protected getDialogType() { return TblCaseTypesDialog; }
        protected getIdProperty() { return TblCaseTypesRow.idProperty; }
        protected getLocalTextPrefix() { return TblCaseTypesRow.localTextPrefix; }
        protected getService() { return TblCaseTypesService.baseUrl; }

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