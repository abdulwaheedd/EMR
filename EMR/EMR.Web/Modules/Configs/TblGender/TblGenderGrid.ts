
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblGenderGrid extends Serenity.EntityGrid<TblGenderRow, any> {
        protected getColumnsKey() { return 'Configs.TblGender'; }
        protected getDialogType() { return TblGenderDialog; }
        protected getIdProperty() { return TblGenderRow.idProperty; }
        protected getLocalTextPrefix() { return TblGenderRow.localTextPrefix; }
        protected getService() { return TblGenderService.baseUrl; }

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