
namespace EMR.FM {

    @Serenity.Decorators.registerClass()
    export class LkpServiceTypesGrid extends Serenity.EntityGrid<LkpServiceTypesRow, any> {
        protected getColumnsKey() { return 'FM.LkpServiceTypes'; }
        protected getDialogType() { return LkpServiceTypesDialog; }
        protected getIdProperty() { return LkpServiceTypesRow.idProperty; }
        protected getLocalTextPrefix() { return LkpServiceTypesRow.localTextPrefix; }
        protected getService() { return LkpServiceTypesService.baseUrl; }

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