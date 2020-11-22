
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblOccupationGrid extends Serenity.EntityGrid<TblOccupationRow, any> {
        protected getColumnsKey() { return 'Configs.TblOccupation'; }
        protected getDialogType() { return TblOccupationDialog; }
        protected getIdProperty() { return TblOccupationRow.idProperty; }
        protected getLocalTextPrefix() { return TblOccupationRow.localTextPrefix; }
        protected getService() { return TblOccupationService.baseUrl; }

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