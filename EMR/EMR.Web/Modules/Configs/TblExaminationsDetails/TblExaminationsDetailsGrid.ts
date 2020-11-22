
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblExaminationsDetailsGrid extends Serenity.EntityGrid<TblExaminationsDetailsRow, any> {
        protected getColumnsKey() { return 'Configs.TblExaminationsDetails'; }
        protected getDialogType() { return TblExaminationsDetailsDialog; }
        protected getIdProperty() { return TblExaminationsDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return TblExaminationsDetailsRow.localTextPrefix; }
        protected getService() { return TblExaminationsDetailsService.baseUrl; }

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