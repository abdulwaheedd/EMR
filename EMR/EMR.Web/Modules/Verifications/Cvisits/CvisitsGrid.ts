
namespace EMR.Verifications {

    @Serenity.Decorators.registerClass()
    export class CvisitsGrid extends Serenity.EntityGrid<CvisitsRow, any> {
        protected getColumnsKey() { return 'Verifications.Cvisits'; }
        protected getDialogType() { return CvisitsDialog; }
        protected getIdProperty() { return CvisitsRow.idProperty; }
        protected getLocalTextPrefix() { return CvisitsRow.localTextPrefix; }
        protected getService() { return CvisitsService.baseUrl; }

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