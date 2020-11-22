
namespace EMR.Verifications {

    @Serenity.Decorators.registerClass()
    export class CpatienthistoryGrid extends Serenity.EntityGrid<CpatienthistoryRow, any> {
        protected getColumnsKey() { return 'Verifications.Cpatienthistory'; }
        protected getDialogType() { return CpatienthistoryDialog; }
        protected getIdProperty() { return CpatienthistoryRow.idProperty; }
        protected getLocalTextPrefix() { return CpatienthistoryRow.localTextPrefix; }
        protected getService() { return CpatienthistoryService.baseUrl; }

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