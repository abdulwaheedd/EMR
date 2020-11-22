
namespace EMR.VitalSigns {

    @Serenity.Decorators.registerClass()
    export class VitalvisitsGrid extends Serenity.EntityGrid<VitalvisitsRow, any> {
        protected getColumnsKey() { return 'VitalSigns.Vitalvisits'; }
        protected getDialogType() { return VitalvisitsDialog; }
        protected getIdProperty() { return VitalvisitsRow.idProperty; }
        protected getLocalTextPrefix() { return VitalvisitsRow.localTextPrefix; }
        protected getService() { return VitalvisitsService.baseUrl; }

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