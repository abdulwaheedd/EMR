
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblOutcomesMotherGrid extends Serenity.EntityGrid<TblOutcomesMotherRow, any> {
        protected getColumnsKey() { return 'Configs.TblOutcomesMother'; }
        protected getDialogType() { return TblOutcomesMotherDialog; }
        protected getIdProperty() { return TblOutcomesMotherRow.idProperty; }
        protected getLocalTextPrefix() { return TblOutcomesMotherRow.localTextPrefix; }
        protected getService() { return TblOutcomesMotherService.baseUrl; }

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