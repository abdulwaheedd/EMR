
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TypeofvisitGrid extends Serenity.EntityGrid<TypeofvisitRow, any> {
        protected getColumnsKey() { return 'Configs.Typeofvisit'; }
        protected getDialogType() { return TypeofvisitDialog; }
        protected getIdProperty() { return TypeofvisitRow.idProperty; }
        protected getLocalTextPrefix() { return TypeofvisitRow.localTextPrefix; }
        protected getService() { return TypeofvisitService.baseUrl; }

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