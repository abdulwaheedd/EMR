
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblDeptGrid extends Serenity.EntityGrid<TblDeptRow, any> {
        protected getColumnsKey() { return 'Configs.TblDept'; }
        protected getDialogType() { return TblDeptDialog; }
        protected getIdProperty() { return TblDeptRow.idProperty; }
        protected getLocalTextPrefix() { return TblDeptRow.localTextPrefix; }
        protected getService() { return TblDeptService.baseUrl; }

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