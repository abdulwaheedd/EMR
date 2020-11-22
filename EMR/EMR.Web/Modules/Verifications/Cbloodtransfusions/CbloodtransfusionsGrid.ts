
namespace EMR.Verifications {

    @Serenity.Decorators.registerClass()
    export class CbloodtransfusionsGrid extends Serenity.EntityGrid<CbloodtransfusionsRow, any> {
        protected getColumnsKey() { return 'Verifications.Cbloodtransfusions'; }
        protected getDialogType() { return CbloodtransfusionsDialog; }
        protected getIdProperty() { return CbloodtransfusionsRow.idProperty; }
        protected getLocalTextPrefix() { return CbloodtransfusionsRow.localTextPrefix; }
        protected getService() { return CbloodtransfusionsService.baseUrl; }

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