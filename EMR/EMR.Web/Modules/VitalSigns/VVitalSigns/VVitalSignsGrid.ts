
namespace EMR.VitalSigns {

    @Serenity.Decorators.registerClass()
    export class VVitalSignsGrid extends Serenity.EntityGrid<VVitalSignsRow, any> {
        protected getColumnsKey() { return 'VitalSigns.VVitalSigns'; }
        protected getDialogType() { return VVitalSignsDialog; }
        protected getIdProperty() { return VVitalSignsRow.idProperty; }
        protected getLocalTextPrefix() { return VVitalSignsRow.localTextPrefix; }
        protected getService() { return VVitalSignsService.baseUrl; }

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