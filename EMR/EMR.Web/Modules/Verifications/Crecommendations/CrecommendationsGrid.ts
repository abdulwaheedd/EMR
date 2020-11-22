
namespace EMR.Verifications {

    @Serenity.Decorators.registerClass()
    export class CrecommendationsGrid extends Serenity.EntityGrid<CrecommendationsRow, any> {
        protected getColumnsKey() { return 'Verifications.Crecommendations'; }
        protected getDialogType() { return CrecommendationsDialog; }
        protected getIdProperty() { return CrecommendationsRow.idProperty; }
        protected getLocalTextPrefix() { return CrecommendationsRow.localTextPrefix; }
        protected getService() { return CrecommendationsService.baseUrl; }

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