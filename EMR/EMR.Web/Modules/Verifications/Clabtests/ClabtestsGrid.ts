
namespace EMR.Verifications {

    @Serenity.Decorators.registerClass()
    export class ClabtestsGrid extends Serenity.EntityGrid<ClabtestsRow, any> {
        protected getColumnsKey() { return 'Verifications.Clabtests'; }
        protected getDialogType() { return ClabtestsDialog; }
        protected getIdProperty() { return ClabtestsRow.idProperty; }
        protected getLocalTextPrefix() { return ClabtestsRow.localTextPrefix; }
        protected getService() { return ClabtestsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "column-picker-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "refresh-button"), 1);
            return buttons;
        }
    }
}