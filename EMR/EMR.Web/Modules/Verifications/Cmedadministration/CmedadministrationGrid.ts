
namespace EMR.Verifications {

    @Serenity.Decorators.registerClass()
    export class CmedadministrationGrid extends Serenity.EntityGrid<CmedadministrationRow, any> {
        protected getColumnsKey() { return 'Verifications.Cmedadministration'; }
        protected getDialogType() { return CmedadministrationDialog; }
        protected getIdProperty() { return CmedadministrationRow.idProperty; }
        protected getLocalTextPrefix() { return CmedadministrationRow.localTextPrefix; }
        protected getService() { return CmedadministrationService.baseUrl; }

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