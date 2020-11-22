
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblMaritalStatusGrid extends Serenity.EntityGrid<TblMaritalStatusRow, any> {
        protected getColumnsKey() { return 'Configs.TblMaritalStatus'; }
        protected getDialogType() { return TblMaritalStatusDialog; }
        protected getIdProperty() { return TblMaritalStatusRow.idProperty; }
        protected getLocalTextPrefix() { return TblMaritalStatusRow.localTextPrefix; }
        protected getService() { return TblMaritalStatusService.baseUrl; }

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