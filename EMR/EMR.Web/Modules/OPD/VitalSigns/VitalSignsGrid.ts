
namespace EMR.OPD {

    @Serenity.Decorators.registerClass()
    export class VitalSignsGrid extends Serenity.EntityGrid<VitalSignsRow, any> {
        protected getColumnsKey() { return 'OPD.VitalSigns'; }
        protected getDialogType() { return VitalSignsDialog; }
        protected getIdProperty() { return VitalSignsRow.idProperty; }
        protected getLocalTextPrefix() { return VitalSignsRow.localTextPrefix; }
        protected getService() { return VitalSignsService.baseUrl; }

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