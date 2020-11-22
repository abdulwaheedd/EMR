
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblWardGrid extends Serenity.EntityGrid<TblWardRow, any> {
        protected getColumnsKey() { return 'Configs.TblWard'; }
        protected getDialogType() { return TblWardDialog; }
        protected getIdProperty() { return TblWardRow.idProperty; }
        protected getLocalTextPrefix() { return TblWardRow.localTextPrefix; }
        protected getService() { return TblWardService.baseUrl; }

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