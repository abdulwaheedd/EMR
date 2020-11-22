
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class LkpPatientTypeGrid extends Serenity.EntityGrid<LkpPatientTypeRow, any> {
        protected getColumnsKey() { return 'Configs.LkpPatientType'; }
        protected getDialogType() { return LkpPatientTypeDialog; }
        protected getIdProperty() { return LkpPatientTypeRow.idProperty; }
        protected getLocalTextPrefix() { return LkpPatientTypeRow.localTextPrefix; }
        protected getService() { return LkpPatientTypeService.baseUrl; }

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