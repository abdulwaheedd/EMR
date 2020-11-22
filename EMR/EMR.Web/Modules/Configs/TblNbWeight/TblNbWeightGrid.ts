
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblNbWeightGrid extends Serenity.EntityGrid<TblNbWeightRow, any> {
        protected getColumnsKey() { return 'Configs.TblNbWeight'; }
        protected getDialogType() { return TblNbWeightDialog; }
        protected getIdProperty() { return TblNbWeightRow.idProperty; }
        protected getLocalTextPrefix() { return TblNbWeightRow.localTextPrefix; }
        protected getService() { return TblNbWeightService.baseUrl; }

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