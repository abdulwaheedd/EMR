
namespace EMR.Verifications {

    @Serenity.Decorators.registerClass()
    export class CimagingsGrid extends Serenity.EntityGrid<CimagingsRow, any> {
        protected getColumnsKey() { return 'Verifications.Cimagings'; }
        protected getDialogType() { return CimagingsDialog; }
        protected getIdProperty() { return CimagingsRow.idProperty; }
        protected getLocalTextPrefix() { return CimagingsRow.localTextPrefix; }
        protected getService() { return CimagingsService.baseUrl; }

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