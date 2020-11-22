
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblWrdVarGrid extends Serenity.EntityGrid<TblWrdVarRow, any> {
        protected getColumnsKey() { return 'Configs.TblWrdVar'; }
        protected getDialogType() { return TblWrdVarDialog; }
        protected getIdProperty() { return TblWrdVarRow.idProperty; }
        protected getLocalTextPrefix() { return TblWrdVarRow.localTextPrefix; }
        protected getService() { return TblWrdVarService.baseUrl; }

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