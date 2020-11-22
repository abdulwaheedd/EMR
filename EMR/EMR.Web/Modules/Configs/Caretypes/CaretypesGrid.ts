
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class CaretypesGrid extends Serenity.EntityGrid<CaretypesRow, any> {
        protected getColumnsKey() { return 'Configs.Caretypes'; }
        protected getDialogType() { return CaretypesDialog; }
        protected getIdProperty() { return CaretypesRow.idProperty; }
        protected getLocalTextPrefix() { return CaretypesRow.localTextPrefix; }
        protected getService() { return CaretypesService.baseUrl; }

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